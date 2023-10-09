class Comment {
   constructor(commentData) {
      this.data = commentData;
   }

   createAvatarElement() {
      const { avatar, avatarWebP, avatarMp4 } = this.data;
      const mediaElement = document.createElement("picture");
      mediaElement.innerHTML = `
         <source src="${avatarWebP}" type="image/webp" width="50" height="57">
         <source src="${avatarMp4}" type="image/mp4" width="50" height="57">
         <img src="${avatar}" alt="User Avatar" width="50" height="57">
           
      `;
      return mediaElement;
   }

   createCommentContentElement() {
      const { name, commentText } = this.data;
      const commentContentDiv = document.createElement("div");
      commentContentDiv.className = "comment-content";
      commentContentDiv.innerHTML = `
         <p class="name">${name}</p>
         <p>${commentText}</p>
      `;
      return commentContentDiv;
   }

   createCommentStatusElement() {
      const { reactionCount, timeAgo } = this.data;
      const commentStatusDiv = document.createElement("div");
      commentStatusDiv.className = "comment-status";
      commentStatusDiv.innerHTML = `
         <span>Curte·comente <img src="./assets/images/like.png" width="15px" height="15px" alt="Like Image"> ${reactionCount} · </span>
         <small><u>${timeAgo}</u></small>
      `;
      return commentStatusDiv;
   }

   createCommentElement() {
      const commentElement = document.createElement("div");
      commentElement.className = "comments";
      commentElement.id = this.data.id;
      commentElement.style.display = "block";

      const profileDiv = document.createElement("div");
      profileDiv.className = "profile";
      profileDiv.appendChild(this.createAvatarElement());
      commentElement.appendChild(profileDiv);

      commentElement.appendChild(this.createCommentContentElement());

      const commentStatusDiv = this.createCommentStatusElement();
      commentElement.appendChild(commentStatusDiv);

      return commentElement;
   }
}

const commentsData = [
   // Array of comment objects with user information
   {
      id: "comment0",
      avatar: "./assets/images/1.gif",
      avatarWebP: "./assets/images/1.webm",
      avatarMp4: "./assets/images/1.mp4",
      name: "Inês",
      commentText: "Eu ganhei nada",
      reactionCount: 29,
      timeAgo: "4 minutos antes"
   },
   {
      id: "comment1",
      avatar: "./assets/images/4.jpg",
      avatarWebP: "./assets/images/4.webp",
      name: "FernandoPessoa",
      commentText: "Eu gostei essas promoções",
      reactionCount: 9,
      timeAgo: "11 minutos antes"
   },
   {
      id: "comment2",
      avatar: "./assets/images/5.jpg",
      avatarWebP: "./assets/images/5.webp",
      name: "Maria",
      commentText: "Já recebi minha iPhone 11 Pro. Agradeço muito!",
      reactionCount: 22,
      timeAgo: "15 minutos antes"
   },
   {
      id: "comment3",
      avatar: "./assets/images/6.jpg",
      avatarWebP: "./assets/images/6.webp",
      name: "Lucas",
      commentText: "Eu achava que era uma brincadeira, mas meu iPhone 11 Pro do Apple chegou hoje de manhã",
      reactionCount: 36,
      timeAgo: "38 minutos antes"
   },
   {
      id: "comment4",
      avatar: "/assets/images/2.gif",
      avatarWebP: "/assets/images/2.webm",
      avatarMp4: "/assets/images/2.mp4",
      name: "Mariana",
      commentText: "Eu participei, venci e ganhou o meu iPhone 11 Pro do Apple depois de 5 dias. Agradeço vocês!",
      reactionCount: 31,
      timeAgo: "42 minutos antes"
   },
   {
      id: "comment5",
      avatar: "/assets/images/7.jpg",
      avatarWebP: "/assets/images/7.webp",
      name: "Rafael",
      commentText: "É possível pegar o meu iPhone 11 Pro do Apple hoje？ Obrigado",
      reactionCount: 6,
      timeAgo: "1 hora antes"
   },
   {
      id: "comment6",
      avatar: "/assets/images/8.jpg",
      avatarWebP: "/assets/images/8.webp",
      name: "Francisco",
      commentText: "Eu achava que era uma brincadeira, mas hoje de manhã eu recebi meu iPhone 11 Pro através de DHL, eu quero participar outras pesquisas！",
      reactionCount: 15,
      timeAgo: "2 hora antes"
   },
   {
      id: "comment7",
      avatar: "/assets/images/10.jpg",
      avatarWebP: "/assets/images/10.webp",
      name: "Heloísa",
      commentText: "Que bom! Eu nunca ganhei nada!",
      reactionCount: 23,
      timeAgo: "3 hora antes"
   },
   {
      id: "comment8",
      avatar: "/assets/images/9.jpg",
      avatarWebP: "/assets/images/9.webp",
      name: "Gustavo",
      commentText: "No início eu achava que era uma brincadeira, mas em fim eu ganhei minha Galaxy S10. Já falei para os meus amigos, assim eles poderiam ganhar também. :)",
      reactionCount: 30,
      timeAgo: "4 hora antes"
   }
];

const commentsContainer = document.getElementById("comments_face");

commentsData.map(commentData => new Comment(commentData).createCommentElement())
   .forEach(commentElement => commentsContainer.appendChild(commentElement));

// Додавання можливості залишити коментар
const commentForm = document.getElementById("comment_form");
const commentText = document.getElementById("comment_text");

commentForm.addEventListener("submit", function (e) {
   e.preventDefault();
   const newCommentData = {
      id: `comment${commentsData.length}`,
      avatar: "/assets/images/7.jpg",
      name: "Ryan", // Ім'я користувача
      commentText: commentText.value,
      reactionCount: 0,
      timeAgo: "Now"
   };

   const newComment = new Comment(newCommentData).createCommentElement();
   commentsContainer.insertBefore(newComment, commentsContainer.firstChild);
   commentsData.push(newCommentData);
   commentText.value = "";
});

function createBox() {
   // Create a new block
   const newDiv = document.createElement('div');
   newDiv.className = 'try temblor';

   // Create inner divs with classes and images
   const innerDivs = [
      { className: 'caja_tapa', imgSrc: '/assets/images/box-top.png', imgAlt: 'Image of the top part of the box' },
      { className: 'caja_trasera', imgSrc: '/assets/images/box-ins.png', imgAlt: 'Image of the inside' },
      { className: 'caja_gift', imgSrc: '/assets/images/phone-box.webp', imgAlt: 'Image of the phone box' },
      { className: 'caja', imgSrc: '/assets/images/box-bottom.png', imgAlt: 'Image of the bottom part of the box' }
   ];

   innerDivs.forEach((innerDiv) => {
      const div = document.createElement('div');
      div.className = innerDiv.className;
      const img = document.createElement('img');
      img.className = 'box-0';
      img.src = innerDiv.imgSrc;
      img.alt = innerDiv.imgAlt;
      div.appendChild(img);
      newDiv.appendChild(div);
   });

   return newDiv;
}

function addBoxes() {
   // Find an element with the class "boxes"
   const container = document.querySelector('.boxes');

   if (container) {
      for (let i = 0; i < 12; i++) {
         // Create a block and add it to the container
         const box = createBox();
         box.id = i;
         container.appendChild(box);
      }
   }
}
// Call the function to add 12 blocks
addBoxes();

