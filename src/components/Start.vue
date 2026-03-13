<template>
    <div>
        <main>
            <div className="start">
                <h1>Start</h1>
                <div className="start-section">
                    <div class="run-cta">
                        <img src="../assets/right-green-arrow.png">
                        <a href="">Run RetroNet.exe</a>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
@import "../assetts/reset.css";

main {
    font-family: 'Pixelify Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-image: url(../assets/crt-monitor.png);
    background-size: cover;
}
.start-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15em;
    height: 10em;
    border: 1px solid green;
    background-color: black;
    color: green;
}
.start h1 {
    font-size: 1.5em;
    background-color: green;
    color: black;
    width: 100%;
    display: flex;
    justify-content: center;
}
.start a {
    color: green;
    text-decoration: none;
}
.run-cta {
    display: flex;
    align-items: center;
    gap: 0.5em;
}
.run-cta img {
    width: 1.5em;
    height: 1.5em;
}
</style>