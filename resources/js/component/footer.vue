<!-- src/components/Footer.vue -->
<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section about">
            <h3>About Us</h3>
            <p>We are delighted to invite you to join us for First Fest. This exciting event will be held at Manchester.</p>
          </div>
          <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: contact@firstfest.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2024 First Fest | Manchester
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');


  .footer {
    /* background-color: rgb(0, 0, 0); */
    background-color:rgb(215, 218, 63);
    color: rgb(171, 190, 190);
    padding: 10px 0;
    text-align: center;
    height: 50px;

    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 1200px;
    flex-wrap: wrap;
    padding: 20px 0;
  }
  
  .footer-section {
    flex: 1;
    margin: 20px;
    min-width: 250px;
  }
  
  .footer-section h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .footer-section p, .footer-section ul {
    font-size: 14px;
    line-height: 1.5;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin: 5px 0;
  }
  
  .footer-section ul li a {
    color: rgb(171, 190, 190);
    text-decoration: none;
  }
  
  .footer-section ul li a:hover {
    color: hsl(0, 96%, 45%);
  }
  
  .footer-bottom {
    margin-top: 20px;
    font-size: 14px;
    border-top: 1px solid rgb(171, 190, 190);
    padding-top: 10px;
    width: 100%;
  }
  </style>
  