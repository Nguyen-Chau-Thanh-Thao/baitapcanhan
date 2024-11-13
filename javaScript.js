const pond = document.querySelector('.pond');
  let bubbleInterval = 1500;  // Thời gian cố định giữa các lần tạo bọt khí (1500ms)
  const maxBubbles = 40;  // Giới hạn số lượng bọt khí tối đa trên ao cá

  function createBubble() {
     // Kiểm tra xem có quá nhiều bọt khí chưa
     const currentBubbles = pond.querySelectorAll('.bubble').length;
    if (currentBubbles >= maxBubbles) {
      return;  // Nếu đã đủ số lượng bọt khí, không tạo thêm
    }

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    const size = Math.random() * 20 + 10; // Kích thước ngẫu nhiên từ 10px đến 30px
    bubble.style.width = `${size}px`; 
    bubble.style.height = `${size}px`;

    // Vị trí ngẫu nhiên trên chiều ngang và chiều dọc (càng cao càng dễ nổi)
    const leftPos = Math.random() * 100; // Vị trí ngẫu nhiên theo chiều ngang
    const bottomPos = Math.random() * 100 + 10; // Vị trí ngẫu nhiên theo chiều dọc (chỉ từ dưới lên một chút)
    bubble.style.left = `${leftPos}% `;
    bubble.style.bottom = `${bottomPos}%`;

    bubble.style.animationDuration = `${Math.random() * 4 + 2}s`; // Thời gian nổi ngẫu nhiên

    pond.appendChild(bubble);

    // Xóa bọt khí khi hoàn thành hoạt động
    bubble.addEventListener('animationend', () => {
      bubble.remove();
    });
  }

  // Tạo bọt khí mỗi 1,5 giây
  setInterval(createBubble, bubbleInterval)

  const pondElement = document.querySelector('.pond');
const buffer = 75; // Adjust buffer as needed for the fish size

function createFishMovement(fish, fishT, fishz,fishx,fishY) {
  let posX = Math.random() * pond.clientWidth;
 let posY = Math.random() * pond.clientHeight;
  let speedX = (Math.random() - 0.5) * 2;
  let speedY = (Math.random() - 0.5) * 2;
  const maxSpeed = 7;

  function moveFish() {
    posX += speedX;  // Cập nhật vị trí cá theo chiều ngang
    posY += speedY;  // Cập nhật vị trí cá theo chiều dọc

    const pondWidth = pondElement.clientWidth;  // Chiều rộng của hồ
    const pondHeight = pondElement.clientHeight;  // Chiều cao của hồ

    const horizontalLimit = buffer;  // Giới hạn phần đệm ngang
    const verticalTopLimit = buffer;  // Giới hạn phần đệm trên
    const verticalBottomLimit = pondHeight - buffer;  // Giới hạn phần đệm dưới

    // Kiểm tra nếu cá chạm vào biên của hồ, đổi hướng di chuyển
    if (posX < horizontalLimit || posX > pondWidth - horizontalLimit) {
        speedX *= -1;  // Đổi hướng di chuyển theo chiều ngang
        posX = Math.max(horizontalLimit, Math.min(posX, pondWidth - horizontalLimit));  // Giữ cá trong giới hạn ngang
    }
    
    if (posY < verticalTopLimit || posY > verticalBottomLimit) {
        speedY *= -1;  // Đổi hướng di chuyển theo chiều dọc
        posY = Math.max(verticalTopLimit, Math.min(posY, verticalBottomLimit));  // Giữ cá trong giới hạn dọc
    }

    // Cập nhật vị trí và hướng của cá
    fish.style.transform = `translate(${posX}px, ${posY}px) scaleX(${speedX > 0 ? 1 : -1})`;

    // Điều chỉnh tốc độ ngẫu nhiên mà không làm giảm tốc độ theo thời gian
    speedX += (Math.random() - 0.5) * 0.1;  // Biến động ngẫu nhiên nhỏ ở tốc độ ngang
    speedY += (Math.random() - 0.5) * 0.1;  // Biến động ngẫu nhiên nhỏ ở tốc độ dọc
    speedX = Math.max(-maxSpeed, Math.min(maxSpeed, speedX));  // Giới hạn tốc độ ngang
    speedY = Math.max(-maxSpeed, Math.min(maxSpeed, speedY));  // Giới hạn tốc độ dọc


    requestAnimationFrame(moveFish);
  }

  moveFish();
}

// Initialize each fish with the new movement function
createFishMovement(document.getElementById('fish1'));
createFishMovement(document.getElementById('fish2'));
createFishMovement(document.getElementById('fish3'));
createFishMovement(document.getElementById('fisha'));
createFishMovement(document.getElementById('fishb'));
createFishMovement(document.getElementById('fishc'));
//đổi background
function changeBackground() {
  const backgroundList = document.getElementById('backgroundList');
  const selectedBackground = backgroundList.value;
  document.querySelector('.pond').style.backgroundImage = `url(${selectedBackground})`;
}


document.addEventListener("DOMContentLoaded", function() {
  // Set the default song to be shown when the page loads
  const defaultTrackId = "2plbrEY59IikOBgBGLjaoe"; // Default track ID

  // Set the dropdown value to the default track
  document.getElementById("spotifyTrack").value = defaultTrackId;

  // Call the function to display the corresponding iframe
  changeSpotifyTrack();
});

function changeSpotifyTrack() {
  const trackId = document.getElementById("spotifyTrack").value;

  // Hide all iframes
  document.getElementById("spotifyIframe1").hidden = true;
  document.getElementById("spotifyIframe2").hidden = true;
  document.getElementById("spotifyIframe3").hidden = true;

  // Show the selected iframe based on the trackId
  if (trackId === "2plbrEY59IikOBgBGLjaoe") 
    {
    document.getElementById("spotifyIframe1").hidden = false;
  } else if (trackId === "5X7IFDhbms7v9pUoT9J7Dw") {
    document.getElementById("spotifyIframe2").hidden = false;
  } else if (trackId === "7l6V1cdjVlgO8fKN6Lltfr") {
    document.getElementById("spotifyIframe3").hidden = false;
  }
}