import { computed, onBeforeUnmount, onMounted, ref } from "vue";

export const useCursorEffects = () => {
  const cursorX = ref(-100);
  const cursorY = ref(-100);
  const trailCanvas = ref<HTMLCanvasElement | null>(null);

  const trailDots: Array<{ x: number; y: number; life: number }> = [];
  const MAX_TRAIL_DOTS = 24;
  const TRAIL_FADE = 0.04;
  const TRAIL_BASE_RADIUS = 9;

  let trailAnimationFrame = 0;
  let trailContext: CanvasRenderingContext2D | null = null;

  const cursorStyle = computed(
    () =>
      ({
        "--cursor-x": `${cursorX.value}px`,
        "--cursor-y": `${cursorY.value}px`,
      }) as Record<string, string>,
  );

  const resizeTrailCanvas = () => {
    const canvas = trailCanvas.value;
    if (!canvas) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const handlePointerMove = (event: PointerEvent) => {
    cursorX.value = event.clientX;
    cursorY.value = event.clientY;

    trailDots.push({
      x: event.clientX,
      y: event.clientY,
      life: 1,
    });

    if (trailDots.length > MAX_TRAIL_DOTS) {
      trailDots.shift();
    }
  };

  const animateTrail = () => {
    const canvas = trailCanvas.value;
    const context = trailContext;

    if (!canvas || !context) {
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let index = trailDots.length - 1; index >= 0; index -= 1) {
      const dot = trailDots[index];
      dot.life -= TRAIL_FADE;

      if (dot.life <= 0) {
        trailDots.splice(index, 1);
        continue;
      }

      const alpha = dot.life * 0.36;
      const radius = TRAIL_BASE_RADIUS * dot.life + 1.2;

      context.beginPath();
      context.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(63, 163, 77, ${alpha})`;
      context.fill();
    }

    trailAnimationFrame = requestAnimationFrame(animateTrail);
  };

  onMounted(() => {
    trailContext = trailCanvas.value?.getContext("2d") ?? null;
    resizeTrailCanvas();
    window.addEventListener("resize", resizeTrailCanvas);
    window.addEventListener("pointermove", handlePointerMove);
    trailAnimationFrame = requestAnimationFrame(animateTrail);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeTrailCanvas);
    window.removeEventListener("pointermove", handlePointerMove);
    cancelAnimationFrame(trailAnimationFrame);
    trailContext = null;
    trailDots.length = 0;
  });

  return {
    trailCanvas,
    cursorStyle,
  };
};
