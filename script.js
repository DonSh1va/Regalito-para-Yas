<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Feliz Cumpleaños Yas</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="sparkle-field" id="sparkleField"></div>

<div class="stage">
  <div class="title-block" id="titleBlock">
    <h1 class="title">Feliz Cumpleaños Yas</h1>
    <p class="subtitle">Espero que tengas un día increíble 💜</p>
  </div>
  <p class="pre-hint" id="preHint">Tienes un regalo esperándote ✨</p>

  <div class="gift-zone">
    <div class="gift-wrap" id="giftWrap">
      <div class="gift-glow"></div>
      <div class="gift-box">
        <div class="box-body"></div>
        <div class="ribbon-v"></div>
        <div class="ribbon-h"></div>
        <div class="box-lid"></div>
        <div class="bow"></div>
      </div>
      <div class="gift-hint">Toca para abrir</div>
    </div>
  </div>

  <div class="cards-area" id="cardsArea">
    <div class="card-slot" id="slot1">
      <div class="card" id="card1">
        <div class="card-face card-front card-front--dmc">
          <img src="images/dmc.png" alt="Devil May Cry">
          <span class="flip-hint">Toca para voltear</span>
        </div>
        <div class="card-face card-back">
          <div class="heart">💜</div>
          <div class="msg">R62NN-NW47Z-0P6PX</div>
        </div>
      </div>
    </div>

    <div class="card-slot" id="slot2">
      <div class="card" id="card2">
        <div class="card-face card-front card-front--valorant">
          <img src="images/valorant.png" alt="Valorant">
          <span class="flip-hint">Toca para voltear</span>
        </div>
        <div class="card-face card-back">
          <div class="heart">💖</div>
          <div class="msg">RA-XLU9E3SGRZLN7RVT</div>
        </div>
      </div>
    </div>

    <div class="card-slot" id="slot3">
      <div class="card" id="card3">
        <div class="card-face card-front card-front--ut">
          <img src="images/untilthen.png" alt="Until Then">
          <span class="flip-hint">Toca para voltear</span>
        </div>
        <div class="card-face card-back">
          <div class="heart">✨</div>
          <div class="msg">J8Z3F-W2AP9-I2XPK</div>
        </div>
      </div>
    </div>
  </div>

  <button class="finish-btn" id="finishBtn">Terminar</button>

  <div class="final-screen" id="finalScreen">
    <img src="images/final.jpg" alt="Para ti" class="final-img">
    <p class="final-caption">Para ti, que te lo mereces, preciosa</p>
  </div>

  <footer>hecho con cariño para ti 💜</footer>
</div>

<script src="script.js"></script>
</body>
</html>
