export function useRetroSound() {
  const playSound = (url: string, startTime = 0, endTime?: number) => {
    const audio = new Audio(url);

    const safeStartTime = Math.max(0, startTime);
    const hasEndTime = typeof endTime === "number";
    const safeEndTime = hasEndTime
      ? Math.max(safeStartTime, endTime)
      : undefined;

    const clearStopListener = () => {
      audio.removeEventListener("timeupdate", stopAtEndTime);
    };

    const stopAtEndTime = () => {
      if (!hasEndTime || safeEndTime === undefined) {
        return;
      }

      if (audio.currentTime >= safeEndTime) {
        audio.pause();
        audio.currentTime = safeStartTime;
        clearStopListener();
      }
    };

    audio.currentTime = safeStartTime;

    if (hasEndTime) {
      audio.addEventListener("timeupdate", stopAtEndTime);
      audio.addEventListener("ended", clearStopListener, { once: true });
    }

    audio.play();
  };

  return { playSound };
}
