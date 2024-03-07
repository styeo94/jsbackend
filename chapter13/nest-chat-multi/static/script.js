const socket = io('http://localhost:3000/chat');
const roomSocket = io('http://localhost:3000/room');
const nickname = prompt('닉네임을 입력해 주세요.');

$(document).ready(function () {
  $('#message').on('keydown', function (event) {
    if (event.keyCode === 13) {
      $('#btnSndMsg').click();
    }
  });
});

socket.on('connect', () => {
  console.log('connected');
});

function sendMessage() {
  const message = $('#message').val();
  $('#chat').append(`<div>나 : ${message}</div>`);
  socket.emit('message', { message, nickname });
  $('#message').val('');
}

socket.on('message', (message) => {
  $('#chat').append(`<div>${message}</div>`);
});

function createRoom() {
  const room = prompt('생성할 방의 이름을 입력해 주세요.');
  roomSocket.emit('createRoom', { room, nickname });
}

roomSocket.on("rooms", (data) => {
  console.log(data);
  $('#rooms').empty();
  data.forEach((room) => {
    $('#rooms').append(`<li>${room} <button onclick="joinRoom('${room}')">join</button></li>`);
  });
});