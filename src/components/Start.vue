<template>
    <div>
        <main>
            <div className="start">
                <p>Start</p>
                <p>Run RetroNet.exe</p>
            </div>
        </main>
    </div>
</template>
<style scoped lang="css">

main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(../public/crt-monitor.jpg);
    background-size: cover;
}
.start {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15em;
    height: 10em;
    background-color: green;
}
</style>