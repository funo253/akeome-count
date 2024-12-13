function updateCountdown() {
    const targetDate = new Date("2025-01-01T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // 残り時間を計算
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // HTMLに反映
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // 時間がゼロになったら
    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<h2>あけましておめでとうございます！</h2>";
    }
}

// 1秒ごとにカウントダウンを更新
const timer = setInterval(updateCountdown, 1000);

// 初回実行
updateCountdown();
