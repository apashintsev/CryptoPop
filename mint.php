<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/profile.css">
    <link rel="stylesheet" href="css/mint.css">
    <title>Crypto pop</title>
    <link rel='shortcut icon' type='image/x-icon' href='./img/favicon.png' />
  </head>
  <body>

  <nav>
    <main>
      <div id="overlay">
        <a href="https://cryptopop.club/">TOP</a>
        <a href="https://cryptopop.club#about_us_title">ABOUT</a>
        <a href="https://cryptopop.club#road_map">ROAD MAP</a>
        <a href="https://cryptopop.club#team">TEAM</a>
        <a href="https://cryptopop.club#faq">FAQ</a>
        <!-- <a href="./profile.php">PROFILE</a> -->
		          <a href="./terms.php">TERMS OF</a>
      </div>

      <div class="nav">
        <!-- <div class="nav-logo">
          <img src="./img/logo.svg" alt="logo">
        </div> -->
        <div id="hamburger">
          <div></div>
        </div>
        <div><a href="https://discord.gg/cryptopopclub" target="_blank"><img src="https://cryptopop.club/img/83.png" alt="discord" class="discord"></a></div>
        <div><a  target="_blank"><img src="https://cryptopop.club/img/reddit.png" alt="open sea" class="opensea"></a></div>
        <div><a href="https://twitter.com/cryptopopc?s=11" target="_blank"><img src="https://cryptopop.club/img/81.png" alt="twitter" class="twitter"></a></div>
        <div><a href="https://instagram.com/cryptopop.club?utm_medium=copy_link" target="_blank"><img src="https://cryptopop.club/img/82.png" alt="instagram" class="instagram"></a></div>
        <div><a href="https://vm.tiktok.com/ZSdBWHQJV" target="_blank"><img src="https://cryptopop.club/img/87.png" alt="tiktok" class="tiktok icon"></a></div>
      </div>
    </main>
</nav>

<div class="main-logo">
  <a href="https://cryptopop.club"><img src="https://cryptopop.club/img/logo.svg" alt="logo"></a>  
</div>   

    <div class="">
        <div class="container">
            <div class="row m-0">
                <div class="col-12 text-center">
                    <div class="main-mint">
                        <h1 class="mint-title">MINT</h1>
                        <h4 class="text-white"> Welcome to the official Crypto pop club Mint extravaganza!</h4>
                        <div class="mt-4">
                            <div class="line-grediant lgr-2  mx-auto"></div>
                        </div>
                        <p class="mt-4 text-light">In order the mint , please connect your Metamask wallet</p>
                        <p class="mt-4 text-light">After you finish minting you'll see your Crypto pop in your OpenSea account</p>
                        <div class="text-light">(When connected to your wallet of course.)</div>

                        <div class="text-center mt-5">
                            <button class="btn btn-lg btn-black connect-wallet m-4">
                                MAX per wallet
                                <div class="zohar">1</div>
                            </button>  
                            
                            <button class="btn btn-lg btn-black connect-wallet m-4"
                            >MINT price 
                            <div class="zohar">Free</div>
                            </button>  
                        </div>
                   

                    </div>
                    
                </div>
           </div>
        </div>

        <div class="social">
            <div class="col-3"><a href="https://discord.gg/cryptopopclub" target="_blank"><img src="./img/83.png" alt="discord" class="footer-social-icon"></a></div>
            <div class="col-3"><a href="https://twitter.com/cryptopopc?s=11" target="_blank"><img src="./img/81.png" alt="twitter" class=" footer-social-icon"></a></div>
            <div class="col-3"><a href="https://instagram.com/cryptopop.club?utm_medium=copy_link" target="_blank"><img src="./img/82.png" alt="instagram" class=" footer-social-icon"></a></div>
            <div class="col-3"><a href="https://vm.tiktok.com/ZSdBWHQJV" target="_blank"><img src="./img/87.png" alt="tiktok" class=" footer-social-icon"></a></div>
        </div>

        <div class="row m-0 mt-5">
            <div class="col-12 mx-auto text-center">
                <button class="btn btn-lg btn-pink connect-wallet">Connect Wallet</button>
            </div>
        </div>

        <div class="row m-0 mt-5">
            <div class="mt-5">
                <div class="line-grediant w-75 mx-auto"></div>
            </div>
        </div>

        <div class="row m-0">
            <div class="mt-5 text-center">
            <img src="https://cryptopop.club/img/Path 688.svg">
            </div>

            <div class="mt-5 text-center">
            <img src="https://cryptopop.club/img/LOGO-1.svg">
            </div>

            <div class="mt-5 text-center">
            <a href="https://discord.gg/cryptopopclub" class="btn btn-dark"><img src="https://cryptopop.club/img/83.png" class="button-img discord-btn-img px-2"> Join Our Discord</a>
            </div>

            <div class="mt-5 text-white text-center">
            <p class="pt-5">© 2022 CryptoPop. All rights reserved to idan edri</p>
            </div>

        </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>    
    <script src="./js/script.js"></script>
    <script>
        // humburger
        (() => {
            const hamburger = document.getElementById("hamburger_des");
            const menu = document.getElementById("overlay_des");
            let open = false;
        
            const change = () => {
            if (!open) {
                hamburger.classList.add("open");
                menu.classList.add("menu");
            } else {
                hamburger.classList.remove("open");
                menu.classList.remove("menu");
            }
            open = !open;
            };
        
            hamburger.addEventListener("click", change);
        })();
    </script>
  </body>
</html>



