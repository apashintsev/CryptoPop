<?php
define('_INCCHECK', 1);
require_once ('./inc/Profile.php');

$profile = new Profile();
$groups = $profile->getGroups();
$balances = $profile->getBalances();
//var_dump($balances);
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/profile.css">
    <link rel="stylesheet" href="css/web3.min.css">
    <title>Crypto pop</title>
    <link rel='shortcut icon' type='image/x-icon' href='./img/favicon.png' />
  </head>
  <body class="not-connected">

  <nav>
    <main>
      <div id="overlay">
        <a href="https://cryptopop.club/">TOP</a>
        <a href="https://cryptopop.club#about_us_title">ABOUT</a>
        <a href="https://cryptopop.club#road_map">ROAD MAP</a>
        <a href="https://cryptopop.club#team">TEAM</a>
        <a href="https://cryptopop.club#faq">FAQ</a>
        <a href="./profile.php">PROFILE</a>
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

    <div class="profile-container">
        <div class="row m-0 hide-connected">
            <div class="col-12 d-flex  justify-content-end">
                 <button class="btn btn-lg btn-pink connect-wallet">Connect Wallet</button>
            </div>
        </div>
        <div class="row m-0 show-connected">
            <div class="col-12 d-flex justify-content-end">
                <div class="profile-block-outer">
                    <div class="profile-block">
                        <i class="fa-brands fa-ethereum"></i>
                        <span id="wallet"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mt-5">

                <div class="col-md-6 p-4 text-light">
                    <div class="row m-0 d-flex justify-content-space-between">
                        <div class="d-flex">
                            <h2 class="">Collecting options</h2> 
                            <div class="line-grediant-profile w-25"></div>
                        </div>
                    </div>

                    <div class="row m-0 mt-5">
                        <p>Unstaking (or collecting) your earnings to your crypto wallet in several options, by percentage steps, every 30 days.</p>
                    </div>

                    <div class="row m-0 mt-5">
                        <div class="col-3"><button class="button-precentage btn btn-dark px-md-4">25%</button></div>
                        <div class="col-3"><button class="button-precentage btn btn-dark px-md-4">50%</button></div>
                        <div class="col-3"><button class="button-precentage btn btn-dark px-md-4">75%</button></div>
                        <div class="col-3"><button class="button-precentage btn btn-dark px-md-4">100%</button></div>
                    </div>

                    <div class="row m-0 mt-5"><hr></div>

                    <div class="row m-0 mt-5 text-center">
                        <div class="col-6">
                            <h3>Balance : <span class="balance"> <i class="fa-brands fa-ethereum"> <small>ETH</small></i></span></h3>
                        </div>
                        <div class="col-6">
                            <div class="btn btn-md px-4 btn-dark">Cash Out</div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 p-4 text-light">
                    <div class="row m-0 d-flex justify-content-space-between">
                        <div class="d-flex">
                            <h2 class="">Level And Stats</h2> 
                            <div class="line-grediant-profile w-25"></div>
                        </div>
                    </div>

                    <div class="row m-0 mt-5 box-balance">
                        <div class="col-4 box-balance-border h-100 p-0 m-0 text-center pt-3">
                            <img src="https://cryptopop.club/img/Path 687.svg" class="">
                        </div>
                        <div class="col-4 box-balance-border h-100 p-0 m-0 text-center pt-3">
                            <small><?=$balances['balance_1']?> <i class="fa-brands fa-ethereum"></i>ETH</small>
                            <div>TVL</div>
                        </div>
                        <div class="col-4 box-balance-border-last h-100 p-0 m-0 text-center pt-3">
                            <small><?=$groups[1]->count?></small>
                            <div>(Participants)</div>
                        </div>
                    </div>

                    <div class="row m-0 mt-4 box-balance">
                        <div class="col-4 box-balance-border h-100 p-0 m-0 text-center pt-3">
                            <img src="https://cryptopop.club/img/Path 750.svg" class="">
                        </div>
                        <div class="col-4 box-balance-border h-100 p-0 m-0 text-center pt-3">
                            <small><?=$balances['balance_2']?>  <i class="fa-brands fa-ethereum"></i>ETH</small>
                            <div>TVL</div>
                        </div>
                        <div class="col-4 box-balance-border-last h-100 p-0 m-0 text-center pt-3">
                            <small><?=$groups[2]->count?></small>
                            <div>(Participants)</div>
                        </div>
                    </div>

                    <div class="row m-0 mt-4 box-balance">
                        <div class="col-4 box-balance-border h-100 p-0 m-0 text-center pt-3">
                            <img src="https://cryptopop.club/img/Path 751.svg" class="">
                        </div>
                        <div class="col-4 box-balance-border h-100 p-0 m-0 text-center pt-3">
                            <small><?=$balances['balance_3']?>  <i class="fa-brands fa-ethereum"></i>ETH</small>
                            <div>TVL</div>
                        </div>
                        <div class="col-4 box-balance-border-last h-100 p-0 m-0 text-center pt-3">
                            <small><?=$groups[3]->count?></small>
                            <div>(Participants)</div>
                        </div>
                    </div>

                    <div class="row m-0 mt-4 box-balance">
                        <div class="col-4 box-balance-border h-100 p-0 m-0 text-center pt-3">
                            <img src="https://cryptopop.club/img/Path 752.svg" class="">
                        </div>
                        <div class="col-4 box-balance-border h-100 p-0 m-0 text-center pt-3">
                            <small><?=$balances['balance_4']?>  <i class="fa-brands fa-ethereum"></i>ETH</small>
                            <div>TVL</div>
                        </div>
                        <div class="col-4 box-balance-border-last h-100 p-0 m-0 text-center pt-3">
                            <small><?=$groups[4]->count?></small>
                            <div>(Participants)</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <div class="row mt-5">
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
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>

    <script src="./js/script.js"></script>
    <script src="./js/build-debug.js"></script>

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



