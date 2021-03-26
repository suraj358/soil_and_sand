var array=[[6595,3970,1900,280,1790,6595,59.34],
    [4855,7549,1540,1554,1740,65.17,60.73],
    [2125,7594,5547,1448,11.38,66.15,61.48],
    [2110,7440,5546,1454,11.35,65.28,60.75],
    [2143,7425,2210,1410,12.75,68.30,62.22]];
var p = Math.floor(Math.random() * (5 - 0) + 0);
var mldDia = 10, mldHght=13, hdr=31, layerNo=3, compEnergy=3, mldWght=990, mldVol=1021.01;

var cnt=0;
var repeat=0;

var p=0;
var d=".00";
var data=0;
function IsInt(num)
{
    if(Number.isInteger(num))
    {
        data=num+d;
    }
    else
    {
        data=num;
    }
}

$(function()
{
    $('input').on('input', function() {
        this.value = this.value.match(/\d*(\.\d*)?/)[0];
    });
});


function navNext()
{
    for (temp = 0; temp <= 11; temp++)
    {
        document.getElementById('canvas'+temp).style.visibility="hidden";
    }

    simsubscreennum+=1;
    document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
    document.getElementById('nextButton').style.visibility="hidden";
    magic();
}
//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
    if (document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";

}
//stop blinking arrow
function myStopFunction()
{
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility="hidden";
}


//-------------------------------------function magic starts here----------------------------------------------------
function magic() {

    if (simsubscreennum == 1) {
        document.getElementById('canV').style.visibility = "hidden";
        document.getElementById('canh').style.visibility = "hidden";
        document.getElementById('cand').style.visibility = "hidden";

        myInt = setInterval(function () {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 490px; top: 250px; height: 30px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('a2').onclick = function () {
            myStopFunction();
            document.getElementById('a2').onclick = "";
            document.getElementById('a2').style.animation = "move1 1s forwards";
            setTimeout(function () {
                document.getElementById('can1').innerHTML = "Height of calibrating container = <u>14 .5cm</u>";
                setTimeout(function () {
                    document.getElementById('a2').style.visibility = "hidden";
                    document.getElementById('a8').style.visibility = "visible";
                    document.getElementById('a9').style.visibility = "visible";

                    myInt = setInterval(function () {
                        animatearrow();
                    }, 500);
                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 350px; top: 100px; height: 30px; z-index: 10;";
                    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
                    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
                    document.getElementById("arrow1").style.transform = "rotate(270deg)";
                    document.getElementById('a8').onclick = function () {
                        document.getElementById('a9').onclick = function () {
                            myStopFunction();
                            // document.getElementById('a8').onclick = " ";
                            // document.getElementById('a9').onclick = " ";
                            document.getElementById('a8').style.animation = "move2 1s  forwards";
                            document.getElementById('a9').style.animation = "move3 1s  forwards";
                            setTimeout(function () {
                                document.getElementById('can2').innerHTML = "Internal Diameter of calibrating container = <u>10cm</u>";
                                setTimeout(function () {
                                    document.getElementById('a8').style.visibility = "hidden";
                                    document.getElementById('a9').style.visibility = "hidden";
                                    document.getElementById('can1').style.visibility = "hidden";
                                    document.getElementById('can2').style.visibility = "hidden";
                                    document.getElementById('a1').style.visibility = "hidden";
                                    document.getElementById('cal').style.visibility = "visible";
                                    document.getElementById('canh').style.visibility = "visible";
                                    document.getElementById('cand').style.visibility = "visible";
                                    document.getElementById('can3').style.visibility = "visible";
                                    document.getElementById('formula').style.visibility = "visible";
                                    document.getElementById('tx').style.visibility = "visible";
                                    document.getElementById('q').style.visibility = "visible";
                                    document.getElementById('ch').style.visibility = "visible";
                                    document.getElementById('ch').onclick = function () {
                                        if (document.getElementById('tx').value == "") {
                                            alert("Enter the value to proceed");
                                        } else {
                                            var n = 1138.685;
                                            if (document.getElementById('tx').value == n) {
                                                document.getElementById('w1').style.visibility = "hidden";
                                                document.getElementById('result').style.visibility = "visible";
                                                document.getElementById('ch').style.visibility = "hidden";
                                                document.getElementById('re').style.visibility = "hidden";
                                                document.getElementById('nextButton').style.visibility = "visible";
                                            } else {
                                                document.getElementById('result').style.visibility = "hidden";
                                                document.getElementById('ch').style.visibility = "visible";
                                                document.getElementById('re').style.visibility = "visible";
                                                document.getElementById('w1').style.visibility = "visible";
                                                document.getElementById('ch').onclick = function () {
                                                    // step33();
                                                };
                                                document.getElementById('re').onclick = function () {
                                                    step38();
                                                };
                                            }

                                            function step38() {
                                                document.getElementById('tx').style.visibility = "hidden";
                                                document.getElementById('w1').style.visibility = "hidden";
                                                document.getElementById('q').style.visibility = "hidden";
                                                document.getElementById('re').style.visibility = "hidden";
                                                document.getElementById('ch').style.visibility = "hidden";
                                                document.getElementById('value').style.visibility = "visible";
                                                document.getElementById('nextButton').style.visibility = "visible";
                                            }
                                        }
                                    }
                                }, 2000);
                            }, 1000);
                        }
                    }
                }, 500);
            }, 800);
        }






    } else if (simsubscreennum == 2) {

        document.getElementById('canh').style.visibility = "hidden";
        document.getElementById('cand').style.visibility = "hidden";
        document.getElementById('cal').style.visibility = "hidden";
        document.getElementById('q').style.visibility = "hidden";
        document.getElementById('ch').style.visibility = "hidden";
        document.getElementById('re').style.visibility = "hidden";
        document.getElementById('result').style.visibility = "hidden";
        document.getElementById('w1').style.visibility = "hidden";
        document.getElementById('formula').style.visibility = "hidden";
        document.getElementById('value').style.visibility = "hidden";
        document.getElementById('tx').style.visibility = "hidden";

        myInt = setInterval(function () {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 400px; top: 300px; height: 30px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('b2').onclick = function () {
            myStopFunction();
            document.getElementById('canV').style.visibility = "";
            document.getElementById('b2').style.animation = "move4 1s  forwards";
            document.getElementById('cal').style.visibility = "hidden";
            setTimeout(function () {
                document.getElementById('123').style.visibility = "hidden";
                document.getElementById('b5').style.visibility = "visible";
                setTimeout(function () {
                    myStopFunction();
                    myInt = setInterval(function () {
                        animatearrow();
                    }, 500);
                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 250px; top: 240px; height: 30px; z-index: 10;";
                    document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                    document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                    document.getElementById("arrow1").style.transform = "rotate(90deg)";
                    document.getElementById('b5').onclick = function () {
                        myStopFunction();
                        document.getElementById('b5').style.animation = "move41 1s  forwards";
                        document.getElementById('b2').style.visibility = "hidden";
                        setTimeout(function () {
                            document.getElementById('b6').style.visibility = "visible";
                            document.getElementById('b1').style.visibility = "hidden";
                            document.getElementById('b8').style.visibility = "visible";
                            document.getElementById('123').style.visibility = "visible";
                            document.getElementById('ba1').style.visibility = "visible";
                            document.getElementById('bb1').style.visibility = "visible";

                            setTimeout(function () {
                                document.getElementById('b5').style.visibility = "hidden";
                                document.getElementById('b6').style.visibility = "hidden";
                                myStopFunction();
                                myInt = setInterval(function () {
                                    animatearrow();
                                }, 500);
                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 535px; top: 420px; height: 30px; z-index: 10;";
                                document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                document.getElementById('ba1').onclick = function () {
                                    myStopFunction();
                                    document.getElementById('ba1').onclick = " ";
                                    document.getElementById('v3').innerHTML = "0.0005";
                                    document.getElementById("123").style.backgroundColor = "lightgrey";

                                    setTimeout(function () {
                                        myStopFunction();
                                        myInt = setInterval(function () {
                                            animatearrow();
                                        }, 500);
                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 640px; top: 420px; height: 30px; z-index: 10;";
                                        document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                        document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                        document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                        document.getElementById('bb1').onclick = function () {
                                            myStopFunction();
                                            document.getElementById('bb1').onclick = "";
                                            document.getElementById('v3').innerHTML = "0.003";
                                            document.getElementById("123").style.backgroundColor = "lightgrey";

                                            setTimeout(function () {
                                                myStopFunction();
                                                myInt = setInterval(function () {
                                                    animatearrow();
                                                }, 500);
                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 50px; top: 300px; height: 30px; z-index: 10;";
                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                document.getElementById('b8').onclick = function () {
                                                    myStopFunction();
                                                    document.getElementById('b8').style.animation = "move5 1s  forwards";
                                                    setTimeout(function () {
                                                        document.getElementById('ba1').style.visibility = "hidden";
                                                        document.getElementById('b8').style.visibility = "hidden";
                                                        document.getElementById('b7').style.visibility = "visible";
                                                        document.getElementById('can3').innerHTML = "Weight of Sand Pouring Cylinder with sand, (W<sub>1</sub>)  =  <u>6595  gm</u>";
                                                        document.getElementById('v3').innerHTML = "6595";
                                                        document.getElementById('nextButton').style.visibility = "visible";
                                                    }, 500);
                                                }
                                            }, 1000);
                                        }
                                        // }, 500);
                                        // }
                                    }, 500);
                                }



                            }, 800);
                        }, 1000);
                    }
                }, 500);
            }, 1000);
        }
    } else if (simsubscreennum == 3) {

        document.getElementById('123').style.visibility = "hidden";
        document.getElementById('can3').style.visibility = "hidden";
        document.getElementById('v3').style.visibility = "hidden";
        document.getElementById('b7').style.visibility = "hidden";
        document.getElementById('ba1').style.visibility = "hidden";
        document.getElementById('bb1').style.visibility = "hidden";
        document.getElementById('b1').style.visibility = "hidden";

        myInt = setInterval(function () {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 180px; top: 250px; height: 30px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        document.getElementById("arrow1").style.transform = "rotate(0deg)";
        document.getElementById('c2').onclick = function () {
            myStopFunction();
            document.getElementById('c1').style.visibility = "visible";
            document.getElementById('c2').style.animation = "move6 1s  forwards";
            setTimeout(function () {
                // document.getElementById('c1').style.visibility = "visible";
                document.getElementById('c2').style.visibility = "visible"
                setTimeout(function () {
                    document.getElementById('c1').style.visibility = "hidden";
                    document.getElementById('c2').style.visibility = "hidden";
                    document.getElementById('c3').style.visibility = "visible";
                    document.getElementById('c5').style.visibility = "visible";
                    myStopFunction();
                    setTimeout(function () {
                        myStopFunction();
                        myInt = setInterval(function () {
                            animatearrow();
                        }, 500);
                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 50px; top: 350px; height: 30px; z-index: 10;";
                        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                        document.getElementById("arrow1").style.transform = "rotate(180deg)";
                        document.getElementById('c5').onclick = function () {
                            myStopFunction();
                            document.getElementById('c5').style.animation = "move7 3s  forwards";
                            setTimeout(function () {
                                document.getElementById('c5').style.visibility = "visible";
                                setTimeout(function () {
                                    myStopFunction();
                                    myInt = setInterval(function () {
                                        animatearrow();
                                    }, 500);
                                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 50px; top: 350px; height: 30px; z-index: 10;";
                                    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                    document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                    document.getElementById('c5').onclick = function () {
                                        myStopFunction();
                                        document.getElementById('c5').style.animation = "move8 1s  forwards";
                                        setTimeout(function () {
                                            document.getElementById('c3').style.visibility = "hidden";
                                            document.getElementById('c5').style.visibility = "hidden";
                                            document.getElementById('c2').style.visibility = "visible";
                                            document.getElementById('c7').style.visibility = "visible";
                                            setTimeout(function () {
                                                myStopFunction();
                                                myInt = setInterval(function () {
                                                    animatearrow();
                                                }, 500);
                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 540px; top: 440px; height: 30px; z-index: 10;";
                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                document.getElementById('ca').onclick = function () {
                                                    myStopFunction();
                                                    document.getElementById('ca').onclick = " ";
                                                    document.getElementById('v4').innerHTML = "0.0005";
                                                    document.getElementById("1").style.backgroundColor = "lightgrey";
                                                    setTimeout(function () {
                                                        myStopFunction();
                                                        myInt = setInterval(function () {
                                                            animatearrow();
                                                        }, 500);
                                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 645px; top: 440px; height: 30px; z-index: 10;";
                                                        document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                        document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                        document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                        document.getElementById('cb').onclick = function () {
                                                            myStopFunction();
                                                            document.getElementById('c2').style.visibility = "hidden";
                                                            document.getElementById('cb').onclick = " ";
                                                            document.getElementById('v4').innerHTML = "00.00";
                                                            setTimeout(function () {
                                                                myStopFunction();
                                                                myInt = setInterval(function () {
                                                                    animatearrow();
                                                                }, 500);
                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 130px; top: 430px; height: 30px; z-index: 10;";
                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                                document.getElementById('c7').onclick = function () {
                                                                    myStopFunction();
                                                                    document.getElementById('c7').style.animation = "move9 1s  forwards";
                                                                    setTimeout(function () {
                                                                        document.getElementById('c7').style.visibility = "visible";
                                                                        // document.getElementById('c2').style.visibility = "hidden";
                                                                        document.getElementById('c10').style.visibility = "hidden";
                                                                        document.getElementById('c11').style.visibility = "hidden";
                                                                        document.getElementById('can4').innerHTML = "Weight of Sand in Conical Portion, (W<sub>2</sub>)  =  <u>3970 gm</u>";
                                                                        document.getElementById('v4').innerHTML = "3970";
                                                                        setTimeout(function () {
                                                                            myInt = setInterval(function () {
                                                                                animatearrow();
                                                                            }, 500);
                                                                            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 645px; top: 440px; height: 30px; z-index: 10;";
                                                                            document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                                            document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                                            document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                                        }, 1500);
                                                                        document.getElementById('cb').onclick = function () {
                                                                            myStopFunction();
                                                                            document.getElementById('c7').style.visibility = "hidden";
                                                                            document.getElementById('can4').style.visibility = "hidden";
                                                                            document.getElementById('c1').style.visibility = "visible";
                                                                            document.getElementById('cb').onclick = " ";
                                                                            document.getElementById('v4').innerHTML = "00.00";
                                                                            setTimeout(function () {
                                                                                myStopFunction();
                                                                                myInt = setInterval(function () {
                                                                                    animatearrow();
                                                                                }, 500);
                                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 130px; top: 390px; height: 30px; z-index: 10;";
                                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                                                document.getElementById('c1').onclick = function () {
                                                                                    myStopFunction();
                                                                                    document.getElementById('c1').style.animation = "move9 1s  forwards";
                                                                                    setTimeout(function () {
                                                                                        document.getElementById('c1').style.visibility = "visible";
                                                                                        document.getElementById('c2').style.visibility = "hidden";
                                                                                        document.getElementById('v4').style.visibility = "hidden";
                                                                                        document.getElementById('c10').style.visibility = "hidden";
                                                                                        document.getElementById('cb').style.visibility = "hidden";
                                                                                        document.getElementById('can40').innerHTML = "weight of empty calibrating container (W<sub>3</sub>),in gms  =  <u>1900 gm</u>";
                                                                                        document.getElementById('v40').innerHTML = "1900";
                                                                                        document.getElementById('nextButton').style.visibility = "visible";
                                                                                    }, 500);
                                                                                }
                                                                            }, 1000);
                                                                        }
                                                                    }, 2000);
                                                                }
                                                            }, 1000);
                                                        }
                                                    }, 1000);
                                                }
                                            }, 500);
                                        }, 1000);
                                    }
                                }, 500);
                            }, 1000);
                        }
                    }, 500);
                }, 1000);
            }, 1500);
        }




    } else if (simsubscreennum == 4) {
        document.getElementById("c18").style.backgroundColor = "lightgrey";
        document.getElementById('c1').style.visibility = "hidden";
        document.getElementById('c2').style.visibility = "hidden";
        document.getElementById('c11').style.visibility = "hidden";
        document.getElementById('c10').style.visibility = "hidden";
        setTimeout(function () {
            myInt = setInterval(function () {
                animatearrow();
            }, 500);
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 650px; top: 200px; height: 30px; z-index: 10;";
            document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
            document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
            document.getElementById("arrow1").style.transform = "rotate(360deg)";
            document.getElementById('c22').onclick = function () {
                myStopFunction();
                document.getElementById('v4a').style.visibility = "visible";
                document.getElementById('c22').style.animation = "move10 1s  forwards";
                setTimeout(function () {
                    myStopFunction();
                    document.getElementById('c8').style.visibility = "visible";
                    document.getElementById('c111').style.visibility = "visible";
                    document.getElementById('c22').style.visibility = "hidden";
                    document.getElementById('c5').style.visibility = "visible";
                    setTimeout(function () {
                        myStopFunction();
                        myInt = setInterval(function () {
                            animatearrow();
                        }, 500);
                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 50px; top: 350px; height: 30px; z-index: 10;";
                        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                        document.getElementById("arrow1").style.transform = "rotate(180deg)";
                        document.getElementById('c5').onclick = function () {
                            myStopFunction();
                            document.getElementById('c5').style.animation = "move11 1s  forwards";
                            setTimeout(function () {
                                document.getElementById('c5').style.visibility = "visible";
                            }, 500);
                            setTimeout(function () {
                                myStopFunction();
                                myInt = setInterval(function () {
                                    animatearrow();
                                }, 500);
                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 50px; top: 350px; height: 30px; z-index: 10;";
                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                document.getElementById('c5').onclick = function () {
                                    myStopFunction();
                                    document.getElementById('c5').style.animation = "move12 1s  forwards";
                                    setTimeout(function () {
                                        document.getElementById('c5').style.visibility = "hidden";
                                        document.getElementById('c111').style.visibility = "hidden";
                                        document.getElementById('c9').style.visibility = "visible";
                                        document.getElementById('c22').style.visibility = "visible";
                                        setTimeout(function () {
                                            document.getElementById('c8').style.visibility = "hidden";
                                            document.getElementById('c22').style.visibility = "hidden";
                                        }, 500);
                                    }, 1100);
                                    setTimeout(function () {
                                        myStopFunction();
                                        myInt = setInterval(function () {
                                            animatearrow();
                                        }, 500);
                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 540px; top: 440px; height: 30px; z-index: 10;";
                                        document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                        document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                        document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                        document.getElementById('ca11').onclick = function () {
                                            myStopFunction();
                                            document.getElementById('ca11').onclick = " ";
                                            document.getElementById('v4a').innerHTML = "0.003";
                                            document.getElementById("d18").style.backgroundColor = "lightgrey";
                                            setTimeout(function () {
                                                myStopFunction();
                                                myInt = setInterval(function () {
                                                    animatearrow();
                                                }, 500);
                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 645px; top: 440px; height: 30px; z-index: 10;";
                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                document.getElementById('cb1').onclick = function () {
                                                    myStopFunction();
                                                    document.getElementById('cb1').onclick = " ";
                                                    document.getElementById('v41a').innerHTML = "00.00";
                                                    document.getElementById("c18").style.backgroundColor = "lightgrey";
                                                    document.getElementById('c14').style.visibility = "visible";
                                                    document.getElementById('v4a').style.visibility = "hidden";
                                                    setTimeout(function () {
                                                        myStopFunction();
                                                        myInt = setInterval(function () {
                                                            animatearrow();
                                                        }, 500);
                                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 50px; top: 360px; height: 30px; z-index: 10;";
                                                        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                        document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                        document.getElementById('c9').onclick = function () {
                                                            myStopFunction();
                                                            document.getElementById('c9').style.animation = "move13 0.5s  forwards";
                                                            document.getElementById('c11').style.visibility = "hidden";
                                                            setTimeout(function () {
                                                                document.getElementById('c13').style.visibility = "visible";
                                                                document.getElementById('c14').style.visibility = "visible";
                                                                document.getElementById('c9').style.visibility = "hidden";

                                                                setTimeout(function () {
                                                                    myStopFunction();
                                                                    myInt = setInterval(function () {
                                                                        animatearrow();
                                                                    }, 500);
                                                                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 490px; top: 150px; height: 30px; z-index: 10;";
                                                                    document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)";
                                                                    document.getElementById("arrow1").style.msTransform = "rotate(-90deg)";
                                                                    document.getElementById("arrow1").style.transform = "rotate(-90deg)";
                                                                    document.getElementById('c13').onclick = function () {
                                                                        myStopFunction();
                                                                        document.getElementById('c13').style.animation = "move133 1s  forwards";
                                                                        document.getElementById('c14').style.visibility = "visible";

                                                                        setTimeout(function () {
                                                                            document.getElementById('c14').style.visibility = "hidden";
                                                                            document.getElementById('v4').style.visibility = "hidden";
                                                                            document.getElementById('c13').style.visibility = "hidden";
                                                                            document.getElementById('c15').style.visibility = "visible";
                                                                            document.getElementById('can4a').style.visibility = "visible";
                                                                            document.getElementById('can41a').innerHTML = "weight of sand in cone portion W<sub>4</sub>in gms =  <u>280  gms</u>";
                                                                            document.getElementById('can41aa').innerHTML = "weight of sand in calibrating container without cone portion (W5 or Wa) = (W2-W3-W4) =  <u>1790  gms</u>";
                                                                            document.getElementById('v41a').innerHTML = "280";
                                                                            document.getElementById('nextButton').style.visibility = "visible";
                                                                        }, 500);
                                                                    }
                                                                }, 800);
                                                            }, 1000);
                                                        }
                                                    }, 500);
                                                }
                                            }, 500);
                                        }
                                    }, 1500);
                                }
                            }, 1100);
                        }
                    }, 1500);
                }, 1000);
            }
        }, 2000);

    } else if (simsubscreennum == 5) {
        document.getElementById('c15').style.visibility = "hidden";
        document.getElementById('can4').style.visibility = "hidden";
        document.getElementById('v4').style.visibility = "hidden";

        myInt = setInterval(function () {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 450px; top: 360px; height: 30px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
        document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
        document.getElementById("arrow1").style.transform = "rotate(90deg)";
        document.getElementById('d2').onclick = function () {
            myStopFunction();
            document.getElementById('1').style.visibility = "hidden";
            document.getElementById('d18').style.visibility = "hidden";
            document.getElementById('ca').style.visibility = "hidden";
            document.getElementById('cb').style.visibility = "hidden";

            document.getElementById('d2').style.animation = "mixSoil 1.5s 5 forwards";
            setTimeout(function () {
                document.getElementById('d1').style.visibility = "visible";
                setTimeout(function () {
                    document.getElementById('d3').style.visibility = "visible";
                    setTimeout(function () {
                        document.getElementById('d4').style.visibility = "visible";
                        setTimeout(function () {
                            document.getElementById('d4').style.visibility = "visible";
                            document.getElementById('d3').style.visibility = "hidden";
                            document.getElementById('d2').style.visibility = "hidden";
                            document.getElementById('d1').style.visibility = "hidden";
                            document.getElementById('d6').style.visibility = "visible";
                            setTimeout(function () {
                                myStopFunction();
                                myInt = setInterval(function () {
                                    animatearrow();
                                }, 500);
                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 430px; top: 350px; height: 30px; z-index: 10;";
                                document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
                                document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
                                document.getElementById("arrow1").style.transform = "rotate(360deg)";
                                document.getElementById('d6').onclick = function () {
                                    myStopFunction();
                                    document.getElementById('d6').style.animation = "move24 1s  forwards";
                                    setTimeout(function () {
                                        document.getElementById('d6').style.visibility = "visible";
                                    }, 500);
                                    setTimeout(function () {
                                        document.getElementById('d7').style.visibility = "visible";
                                    }, 1000);
                                    setTimeout(function () {
                                        document.getElementById('d5').style.visibility = "visible";
                                        document.getElementById('d7').style.visibility = "hidden";
                                    }, 2000);
                                    setTimeout(function () {
                                        document.getElementById('d5').style.visibility = "hidden";
                                        document.getElementById('d8').style.visibility = "visible";
                                        document.getElementById('d7').style.visibility = "visible";
                                    }, 3000);
                                    setTimeout(function () {
                                        document.getElementById('d7').style.visibility = "hidden";
                                        document.getElementById('d5').style.visibility = "visible";
                                    }, 4000);
                                    setTimeout(function () {
                                        document.getElementById('d5').style.visibility = "hidden";
                                        document.getElementById('d9').style.visibility = "visible";
                                    }, 5000);
                                    setTimeout(function () {
                                        document.getElementById('d7').style.visibility = "visible";
                                        document.getElementById('d5').style.visibility = "hidden";
                                    }, 6000);
                                    setTimeout(function () {
                                        document.getElementById('d7').style.visibility = "hidden";
                                        document.getElementById('d5').style.visibility = "visible";
                                    }, 7000);
                                    setTimeout(function () {
                                        document.getElementById('d5').style.visibility = "hidden";
                                        document.getElementById('d10').style.visibility = "visible";
                                        document.getElementById('d13').style.visibility = "visible";
                                        document.getElementById('d17').style.visibility = "visible";
                                    }, 8000);
                                    setTimeout(function () {
                                        myStopFunction();
                                        document.getElementById('d12').style.visibility = "visible";
                                        myInt = setInterval(function () {
                                            animatearrow();
                                        }, 500);
                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 390px; top: 290px; height: 30px; z-index: 10;";
                                        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                        document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                        document.getElementById('d13').onclick = function () {
                                            myStopFunction();
                                            document.getElementById('d13').style.animation = "move22 2s  forwards";
                                            setTimeout(function () {
                                                document.getElementById('d10').style.visibility = "hidden";
                                                document.getElementById('d13').style.visibility = "hidden";
                                                document.getElementById('d5').style.visibility = "visible";
                                                document.getElementById('d17').style.visibility = "hidden";
                                            }, 500);
                                            setTimeout(function () {
                                                myStopFunction();
                                                myInt = setInterval(function () {
                                                    animatearrow();
                                                }, 500);
                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 350px; top: 290px; height: 30px; z-index: 10;";
                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                document.getElementById('d5').onclick = function () {
                                                    myStopFunction();
                                                    document.getElementById('d5').style.animation = "move23 2s  forwards";
                                                    setTimeout(function () {
                                                        document.getElementById('d5').style.visibility = "hidden";
                                                        document.getElementById('d14').style.visibility = "visible";
                                                        document.getElementById('d13').style.visibility = "visible";
                                                    }, 500);
                                                    setTimeout(function () {
                                                        myStopFunction();
                                                        myInt = setInterval(function () {
                                                            animatearrow();
                                                        }, 500);
                                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 380px; top: 350px; height: 30px; z-index: 10;";
                                                        document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
                                                        document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
                                                        document.getElementById("arrow1").style.transform = "rotate(360deg)";
                                                        document.getElementById('d13').onclick = function () {
                                                            myStopFunction();
                                                            document.getElementById('d5').style.animation = "move23 0.5s  forwards";
                                                            setTimeout(function () {
                                                                document.getElementById('d5').style.visibility = "hidden";
                                                                document.getElementById('d14').style.visibility = "visible";
                                                                document.getElementById('d13').style.visibility = "visible";
                                                            }, 500);
                                                            setTimeout(function () {
                                                                myStopFunction();
                                                                myInt = setInterval(function () {
                                                                    animatearrow();
                                                                }, 500);
                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 380px; top: 350px; height: 30px; z-index: 10;";
                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
                                                                document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
                                                                document.getElementById("arrow1").style.transform = "rotate(360deg)";
                                                                document.getElementById('d13').onclick = function () {
                                                                    myStopFunction();
                                                                    document.getElementById('d13').style.animation = "move25 2s  forwards";
                                                                    setTimeout(function () {
                                                                        document.getElementById('d8').style.visibility = "hidden";
                                                                        document.getElementById('d13').style.visibility = "hidden";
                                                                        document.getElementById('d5').style.visibility = "visible";
                                                                    }, 500);
                                                                    setTimeout(function () {
                                                                        document.getElementById('d5').style.visibility = "hidden";
                                                                        document.getElementById('d16').style.visibility = "visible";
                                                                        document.getElementById('d13').style.visibility = "visible";
                                                                    }, 1100);
                                                                    setTimeout(function () {
                                                                        myStopFunction();
                                                                        myInt = setInterval(function () {
                                                                            animatearrow();
                                                                        }, 500);
                                                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 380px; top: 350px;  height: 30px; z-index: 10;";
                                                                        document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
                                                                        document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
                                                                        document.getElementById("arrow1").style.transform = "rotate(360deg)";
                                                                        document.getElementById('d13').onclick = function () {
                                                                            myStopFunction();
                                                                            document.getElementById('d13').style.animation = "move26 2s  forwards";
                                                                            setTimeout(function () {
                                                                                document.getElementById('d10').style.visibility = "hidden";
                                                                                document.getElementById('d9').style.visibility = "hidden";
                                                                                document.getElementById('d13').style.visibility = "hidden";
                                                                                document.getElementById('d5').style.visibility = "visible";
                                                                                document.getElementById('d16').style.visibility = "visible";
                                                                                document.getElementById('d15').style.visibility = "visible";
                                                                                setTimeout(function () {
                                                                                    document.getElementById('d5').style.visibility = "hidden";
                                                                                    document.getElementById('d24').style.visibility = "visible";
                                                                                    document.getElementById('d25').style.visibility = "visible";
                                                                                    document.getElementById('d6').style.visibility = "visible";
                                                                                }, 500);
                                                                            }, 1100);
                                                                            setTimeout(function () {
                                                                                myStopFunction();
                                                                                myInt = setInterval(function () {
                                                                                    animatearrow();
                                                                                }, 500);
                                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 100px; top: 290px; height: 30px; z-index: 10;";
                                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)";
                                                                                document.getElementById("arrow1").style.msTransform = "rotate(-90deg)";
                                                                                document.getElementById("arrow1").style.transform = "rotate(-90deg)";
                                                                                document.getElementById('d25').onclick = function () {
                                                                                    myStopFunction();
                                                                                    document.getElementById('d25').style.animation = "move27 2s  forwards";
                                                                                    setTimeout(function () {
                                                                                        document.getElementById('d25').style.visibility = "visible";
                                                                                    }, 500);
                                                                                    setTimeout(function () {
                                                                                        document.getElementById('d26').style.visibility = "visible";
                                                                                        document.getElementById('d25').style.visibility = "hidden";
                                                                                        document.getElementById('d29').style.visibility = "visible";
                                                                                    }, 1100);

                                                                                    setTimeout(function () {
                                                                                        myStopFunction();
                                                                                        myInt = setInterval(function () {
                                                                                            animatearrow();
                                                                                        }, 500);
                                                                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 100px; top: 290px; height: 30px; z-index: 10;";
                                                                                        document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)";
                                                                                        document.getElementById("arrow1").style.msTransform = "rotate(-90deg)";
                                                                                        document.getElementById("arrow1").style.transform = "rotate(-90deg)";
                                                                                        document.getElementById('d26').onclick = function () {
                                                                                            myStopFunction();
                                                                                            document.getElementById('d26').style.animation = "move28 2s  forwards";
                                                                                            setTimeout(function () {
                                                                                                document.getElementById('d29').style.visibility = "hidden";
                                                                                                document.getElementById('d26').style.visibility = "visible";
                                                                                            }, 500);
                                                                                            setTimeout(function () {
                                                                                                document.getElementById('d18').style.visibility = "visible";
                                                                                                document.getElementById('d27').style.visibility = "visible";
                                                                                                document.getElementById('d24').style.visibility = "hidden";
                                                                                                document.getElementById('d4').style.visibility = "hidden";
                                                                                                document.getElementById('d6').style.visibility = "hidden";
                                                                                                document.getElementById('d26').style.visibility = "hidden";
                                                                                                document.getElementById('d12').style.visibility = "hidden";
                                                                                                document.getElementById('d2').style.visibility = "hidden";
                                                                                                document.getElementById('d14').style.visibility = "hidden";
                                                                                                document.getElementById('d15').style.visibility = "hidden";
                                                                                                document.getElementById('d16').style.visibility = "hidden";
                                                                                                document.getElementById('da').style.visibility = "visible";
                                                                                                document.getElementById('db').style.visibility = "visible";
                                                                                            }, 1100);

                                                                                            setTimeout(function () {
                                                                                                myStopFunction();
                                                                                                myInt = setInterval(function () {
                                                                                                    animatearrow();
                                                                                                }, 500);
                                                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 540px; top: 440px; height: 30px; z-index: 10;";
                                                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                                                                document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                                                                document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                                                                document.getElementById('da').onclick = function () {
                                                                                                    myStopFunction();
                                                                                                    document.getElementById('da').onclick = " ";
                                                                                                    document.getElementById('v5').innerHTML = "0.003";
                                                                                                    document.getElementById("d18").style.backgroundColor = "lightgrey";

                                                                                                    setTimeout(function () {
                                                                                                        myStopFunction();
                                                                                                        myInt = setInterval(function () {
                                                                                                            animatearrow();
                                                                                                        }, 500);
                                                                                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 650px; top: 440px; height: 30px; z-index: 10;";
                                                                                                        document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                                                                        document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                                                                        document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                                                                        document.getElementById('db').onclick = function () {
                                                                                                            myStopFunction();
                                                                                                            document.getElementById('db').onclick = " ";
                                                                                                            document.getElementById('v5').innerHTML = "00.00";

                                                                                                            setTimeout(function () {
                                                                                                                myStopFunction();
                                                                                                                myInt = setInterval(function () {
                                                                                                                    animatearrow();
                                                                                                                }, 500);
                                                                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 100px; top: 330px; height: 30px; z-index: 10;";
                                                                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                                                                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                                                                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                                                                                document.getElementById('d27').onclick = function () {
                                                                                                                    myStopFunction();
                                                                                                                    document.getElementById('d27').style.animation = "move29 1s  forwards";
                                                                                                                    setTimeout(function () {
                                                                                                                        document.getElementById('d28').style.visibility = "visible";
                                                                                                                        document.getElementById('d29').style.visibility = "visible";
                                                                                                                        document.getElementById('d27').style.visibility = "hidden";
                                                                                                                        document.getElementById('d29').style.visibility = "hidden";
                                                                                                                    }, 500);
                                                                                                                    setTimeout(function () {
                                                                                                                        document.getElementById('can5').innerHTML = "weight of sand pouring cylinder + sand after poured in to the hole in gms W<sub>6</sub> =  <u>4855gms</u>";
                                                                                                                        document.getElementById('v5').innerHTML = "4855";




                                                                                                                        setTimeout(function () {
                                                                                                                            myStopFunction();
                                                                                                                            myInt = setInterval(function () {
                                                                                                                                animatearrow();
                                                                                                                            }, 500);
                                                                                                                            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 540px; top: 440px; height: 30px; z-index: 10;";
                                                                                                                            document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                                                                                            document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                                                                                            document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                                                                                            document.getElementById('da').onclick = function () {
                                                                                                                                myStopFunction();
                                                                                                                                document.getElementById('da').onclick = " ";
                                                                                                                                document.getElementById('v5').innerHTML = "0.003";
                                                                                                                                document.getElementById("d18").style.backgroundColor = "lightgrey";
                                                                                                                                setTimeout(function () {
                                                                                                                                    myStopFunction();
                                                                                                                                    myInt = setInterval(function () {
                                                                                                                                        animatearrow();
                                                                                                                                    }, 500);
                                                                                                                                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 650px; top: 440px; height: 30px; z-index: 10;";
                                                                                                                                    document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                                                                                                    document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                                                                                                    document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                                                                                                    document.getElementById('db').onclick = function () {
                                                                                                                                        myStopFunction();
                                                                                                                                        document.getElementById('db').onclick = " ";
                                                                                                                                        document.getElementById('v5').innerHTML = "00.00";

                                                                                                                                            myStopFunction();
                                                                                                                                            document.getElementById('d27').style.visibility = "hidden";
                                                                                                                                            document.getElementById('can5').style.visibility = "hidden";
                                                                                                                                            document.getElementById('d24').style.visibility = "hidden";
                                                                                                                                            document.getElementById('d28').style.visibility = "hidden";
                                                                                                                                            document.getElementById('pl').style.visibility = "visible";
                                                                                                                                            document.getElementById('db').onclick = " ";
                                                                                                                                            document.getElementById('v5').innerHTML = "00.00";
                                                                                                                                            setTimeout(function () {
                                                                                                                                                myStopFunction();
                                                                                                                                                myInt = setInterval(function () {
                                                                                                                                                    animatearrow();
                                                                                                                                                }, 500);
                                                                                                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 130px; top: 430px; height: 30px; z-index: 10;";
                                                                                                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                                                                                                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                                                                                                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                                                                                                                document.getElementById('pl').onclick = function () {
                                                                                                                                                    myStopFunction();
                                                                                                                                                    document.getElementById('pl').style.animation = "move9 1s  forwards";
                                                                                                                                                    setTimeout(function () {
                                                                                                                                                        document.getElementById('pl').style.visibility = "visible";
                                                                                                                                                        document.getElementById('v5').style.visibility = "hidden";
                                                                                                                                                        document.getElementById('can50').innerHTML = "weight of empty calibrating container (W<sub>3</sub>),in gms  =  <u>1900 gm</u>";
                                                                                                                                                        document.getElementById('v510').innerHTML = "1900";

                                                                                                                                                        document.getElementById('can500').innerHTML = "weight of sand in hole W<sub>b</sub> = (W<sub>1</sub>-W<sub>6</sub>),in gms  =  <u>1740 gm</u>";
                                                                                                                                                        document.getElementById('nextButton').style.visibility = "visible";
                                                                                                                                                    }, 1500);
                                                                                                                                                }
                                                                                                                                            }, 1000);
                                                                                                                                    }
                                                                                                                                }, 500);
                                                                                                                            }
                                                                                                                        }, 500);

                                                                                                                    }, 1100);
                                                                                                                }
                                                                                                            }, 1500);
                                                                                                        }
                                                                                                    }, 1100);
                                                                                                }







                                                                                            }, 1500);
                                                                                        }
                                                                                    }, 1500);
                                                                                }
                                                                            }, 1500);
                                                                        }
                                                                    }, 1500);
                                                                }
                                                            }, 1100);
                                                        }
                                                    }, 1100);
                                                }
                                            }, 1100);
                                        }
                                    }, 2000);
                                }
                            }, 600);
                        }, 500);
                    }, 1100);
                }, 1200);
            }, 1500);
        }
    }

    else if (simsubscreennum == 6) {

        document.getElementById('d28').style.visibility = "hidden";
        document.getElementById('d19').style.visibility = "hidden";
        document.getElementById('pl').style.visibility = "hidden";

        document.getElementById('d18').style.visibility = "hidden";
        document.getElementById('da').style.visibility = "hidden";
        document.getElementById('db').style.visibility = "hidden";

        document.getElementById('wm').style.visibility = "visible";
        document.getElementById('ada').style.visibility = "visible";
        document.getElementById('adb').style.visibility = "visible";

        myInt = setInterval(function () {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 540px; top: 440px; height: 30px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
        document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
        document.getElementById("arrow1").style.transform = "rotate(90deg)";
        document.getElementById('ada').onclick = function () {
            myStopFunction();
            document.getElementById('ada').onclick = " ";
            document.getElementById('v15').innerHTML = "0.003";
            document.getElementById("wm").style.backgroundColor = "lightgrey";

            setTimeout(function () {
                myStopFunction();
                myInt = setInterval(function () {
                    animatearrow();
                }, 500);
                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 650px; top: 440px; height: 30px; z-index: 10;";
                document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                document.getElementById("arrow1").style.transform = "rotate(90deg)";
                document.getElementById('adb').onclick = function () {
                    myStopFunction();
                    document.getElementById('adb').onclick = " ";
                    document.getElementById('v15').innerHTML = "00.00";

                    setTimeout(function () {
                        myStopFunction();
                        myInt = setInterval(function () {
                            animatearrow();
                        }, 500);
                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 150px; top: 330px; height: 30px; z-index: 10;";
                        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                        document.getElementById("arrow1").style.transform = "rotate(180deg)";
                        document.getElementById('d191').onclick = function () {
                            myStopFunction();
                            document.getElementById('d191').style.animation = "move30 1s  forwards";
                            setTimeout(function () {
                                document.getElementById('can51').style.visibility = "visible";
                                document.getElementById('d191').style.visibility = "visible";
                                document.getElementById('can51').innerHTML = "weight of container with lid (W<sub>1</sub>) in gms = <u>28.30</u> gm";
                                document.getElementById('v15').innerHTML = "28.30";
                                document.getElementById('nextButton').style.visibility = "visible";
                            }, 500);
                        }
                    }, 1500);
                }
            }, 1100);
        }
        // }, 2500);
    }
    else if (simsubscreennum == 7) {

        document.getElementById("wm").style.visibility="hidden";
        document.getElementById("ada").style.visibility="hidden";
        document.getElementById("adb").style.visibility="hidden";
        document.getElementById("d191").style.visibility="hidden";

        document.getElementById("can51").style.visibility="hidden";
        document.getElementById("v15").style.visibility="hidden";

        document.getElementById("e3").style.visibility="visible";
        document.getElementById("e4").style.visibility="visible";
        document.getElementById("e5").style.visibility="visible";
        document.getElementById("e6").style.visibility="visible";
        document.getElementById("e10").style.visibility="visible";


        myInt = setInterval(function () {
            animatearrow();
        }, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 600px; top: 300px; height: 30px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('e2').onclick = function () {
            myStopFunction();
            document.getElementById('e2').style.animation = "move31 1s  forwards";
            document.getElementById('e2').style.visibility = "visible";
            setTimeout(function () {
                document.getElementById('e2').style.visibility = "hidden";
                document.getElementById('e3').style.visibility = "hidden";
                document.getElementById('e7').style.visibility = "visible";
                setTimeout(function () {
                    myStopFunction();
                    myInt = setInterval(function () {
                        animatearrow();
                    }, 1000);
                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 500px; top: 200px; height: 30px; z-index: 10;";
                    document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)";
                    document.getElementById("arrow1").style.msTransform = "rotate(-90deg)";
                    document.getElementById("arrow1").style.transform = "rotate(-90deg)";
                    document.getElementById('e7').onclick = function () {
                        myStopFunction();
                        document.getElementById('e7').style.animation = "move37 1s  forwards";
                        document.getElementById('e7').style.visibility = "hidden";
                        document.getElementById('e71').style.visibility = "visible";
                        setTimeout(function () {
                            myStopFunction();
                            myInt = setInterval(function () {
                                animatearrow();
                            }, 500);
                            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 230px; top: 230px; height: 30px; z-index: 10;";
                            document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)";
                            document.getElementById("arrow1").style.msTransform = "rotate(-90deg)";
                            document.getElementById("arrow1").style.transform = "rotate(-90deg)";
                            document.getElementById('e71').onclick = function () {
                                myStopFunction();
                                document.getElementById('e71').style.animation = "rotMv3 2s  forwards";
                                setTimeout(function () {
                                    document.getElementById('e71').style.visibility = "visible";
                                    document.getElementById('e711').style.visibility = "visible";
                                    document.getElementById('e9').style.visibility = "visible";
                                    document.getElementById('e7').style.visibility = "hidden";
                                    document.getElementById('e71').style.visibility = "hidden";
                                    setTimeout(function () {
                                        document.getElementById('e711').style.visibility = "hidden";
                                        document.getElementById('e3').style.visibility = "hidden";
                                        document.getElementById('e4').style.visibility = "hidden";
                                        document.getElementById('e5').style.visibility = "hidden";
                                        document.getElementById('e6').style.visibility = "hidden";
                                        document.getElementById('e10').style.visibility = "hidden";
                                        document.getElementById('e1').style.visibility = "visible";
                                        document.getElementById('ea').style.visibility = "visible";
                                        document.getElementById('eb').style.visibility = "visible";
                                        setTimeout(function () {
                                            myStopFunction();
                                            myInt = setInterval(function () {
                                                animatearrow();
                                            }, 500);
                                            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 510px; top: 490px; height: 30px; z-index: 10;";
                                            document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                            document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                            document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                            document.getElementById('ea').onclick = function () {
                                                myStopFunction();
                                                document.getElementById('ea').onclick = " ";
                                                document.getElementById('v7').innerHTML = "0.003";
                                                document.getElementById("e1").style.backgroundColor = "lightgrey";
                                                setTimeout(function () {
                                                    myStopFunction();
                                                    myInt = setInterval(function () {
                                                        animatearrow();
                                                    }, 1000);
                                                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 620px; top: 490px; height: 30px; z-index: 10;";
                                                    document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                    document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                    document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                    document.getElementById('eb').onclick = function () {
                                                        myStopFunction();
                                                        document.getElementById('eb').onclick = " ";
                                                        document.getElementById('v7').innerHTML = "00.00";
                                                        setTimeout(function () {
                                                            document.getElementById('v7').style.visibility = "hidden";
                                                            setTimeout(function () {
                                                                myStopFunction();
                                                                myInt = setInterval(function () {
                                                                    animatearrow();
                                                                }, 1000);
                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 90px; top: 380px; height: 30px; z-index: 10;";
                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                                document.getElementById('e9').onclick = function () {
                                                                    myStopFunction();
                                                                    document.getElementById('e9').style.animation = "move351 0.5s  forwards";
                                                                    setTimeout(function () {
                                                                        document.getElementById('can80').innerHTML = "weight of wet soil with lid (W<sub>2</sub>) in gms = <u>50.12gm</u>";
                                                                        document.getElementById('v80').innerHTML = "50.12";
                                                                        document.getElementById("nextButton").style.visibility = "visible";
                                                                    }, 500);
                                                                }
                                                            }, 500);
                                                        }, 1100);
                                                    }
                                                }, 1100);
                                            }
                                        }, 500);
                                    }, 800);
                                }, 1500);
                            }
                        }, 500);
                    }
                }, 500);
            }, 1100);
        }
    } else if (simsubscreennum == 8) {

        document.getElementById("v8").style.visibility = "hidden";
        document.getElementById("can8").style.visibility = "hidden";
        document.getElementById("e9").style.visibility = "hidden";
        document.getElementById("e1").style.visibility = "hidden";
        document.getElementById("ea").style.visibility = "hidden";
        document.getElementById("eb").style.visibility = "hidden";
        document.getElementById("e20").style.visibility = "hidden";


        document.getElementById("nextButton").style.visibility = "hidden";
        document.getElementById("13-11").style.visibility = "visible";
        // document.getElementById("incDoor13-"+repeat).style="visibility:visible;";
        document.getElementById("incDoor13-1").style="visibility:visible;";
        document.getElementById("13-12").innerHTML="&nbsp;113";

        myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:90px; top:235px; height: 30px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
        document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
        document.getElementById("arrow1").style.transform = "rotate(270deg)";
        document.getElementById("13-11").onclick=function()
        {
            myStopFunction();
            $('.door').toggleClass('doorOpen');
            document.getElementById("13-11").onclick="";
            setTimeout(function(){
                document.getElementById("13-11").style.visibility="hidden";
            },350);
            setTimeout(function()
            {
                myInt = setInterval(function(){ animatearrow(); }, 500);
                document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:75px; top:485px; height: 30px; z-index: 10;";
                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                document.getElementById("13-3a").onclick=function()
                {
                    myStopFunction();
                    document.getElementById("13-3a").onclick="";
                    document.getElementById("13-3a").style.animation="placeContainerinOven 1.5s forwards";
                    // document.getElementById("13-3b").style.animation="placeContainerwithSoilinOven 1.5s forwards";
                    setTimeout(function()
                    {
                        myInt = setInterval(function(){ animatearrow(); }, 500);
                        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:255px; height: 35px; z-index: 10;";
                        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
                        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
                        document.getElementById("arrow1").style.transform = "rotate(0deg)";
                        // document.getElementById("incDoor13-"+repeat).onclick=function()
                        document.getElementById("incDoor13-1").onclick=function()
                        {
                            myStopFunction();
                            // document.getElementById("incDoor13-"+repeat).onclick="";
                            document.getElementById("incDoor13-1").onclick="";
                            $('.door').toggleClass('doorOpen');
                            setTimeout(function()
                            {
                                document.getElementById("13-11").style.visibility="visible";

                                var temp=113;
                                myInt = setInterval(function(){ animatearrow(); }, 500);
                                document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:215px; top:147px; height: 25px; z-index: 10;";
                                document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
                                document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
                                document.getElementById("arrow1").style.transform = "rotate(270deg)";
                                document.getElementById("13-13").onclick=function()
                                {
                                    if(temp<115)
                                    {
                                        temp++;
                                        document.getElementById("13-12").innerHTML="&nbsp;"+temp;
                                    }
                                    if(temp>=115)
                                    {
                                        myStopFunction();
                                        document.getElementById("13-13").onclick="";
                                        setTimeout(function()
                                        {
                                            document.getElementById("13-2").style.visibility="visible";
                                            $("#13-3").fadeIn(1000);
                                            setTimeout(function()
                                            {
                                                $("#13-3").fadeOut(2000);
                                                setTimeout(function()
                                                {
                                                    document.getElementById("13-2").style.visibility="hidden";
                                                    takeOutCaontainer();
                                                },2000);
                                            },2000);
                                        },1500);
                                    }
                                }
                            },1150);
                        }
                    },1500);
                }
            },1500);
        }
    }

    else if (simsubscreennum == 9) {

        document.getElementById("2").style.visibility="visible";
        document.getElementById("fa").style.visibility="visible";
        document.getElementById("fb").style.visibility="visible";
        // document.getElementById("13-a").style.visibility="visible";

        document.getElementById("13-1").style.visibility="hidden";
        document.getElementById("13-11").style.visibility="hidden";
        document.getElementById("13-2").style.visibility="hidden";
        document.getElementById("13-3").style.visibility="hidden";
        document.getElementById("13-a").style.visibility="visible";


        setTimeout(function () {
            myInt = setInterval(function () {
                animatearrow();
            }, 500);
            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 510px; top: 490px; height: 30px; z-index: 10;";
            document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
            document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
            document.getElementById("arrow1").style.transform = "rotate(90deg)";
            document.getElementById('fa').onclick = function () {
                myStopFunction();
                document.getElementById('fa').onclick = " ";
                document.getElementById('w').innerHTML = "0.003";
                document.getElementById("2").style.backgroundColor = "lightgrey";
                setTimeout(function () {
                    myStopFunction();
                    myInt = setInterval(function () {
                        animatearrow();
                    }, 1000);
                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 620px; top: 490px; height: 30px; z-index: 10;";
                    document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                    document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                    document.getElementById("arrow1").style.transform = "rotate(90deg)";
                    document.getElementById('fb').onclick = function () {
                        myStopFunction();
                        document.getElementById('fb').onclick = " ";
                        document.getElementById('w11').innerHTML = "00.00";
                        setTimeout(function () {
                            document.getElementById('w').style.visibility = "hidden";
                            setTimeout(function () {
                                document.getElementById("13-a").style.visibility="visible";
                                myStopFunction();
                                myInt = setInterval(function () {
                                    animatearrow();
                                }, 1000);
                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 90px; top: 500px; height: 30px; z-index: 10;";
                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                document.getElementById('13-a').onclick = function () {
                                    myStopFunction();
                                    document.getElementById('13-a').style.animation = "move351 0.5s  forwards";
                                    setTimeout(function () {
                                        document.getElementById('w11').style.visibility = "hidden";
                                        document.getElementById('can').innerHTML = "weight of dry soil with lid (W<sub>3</sub>) in gms = <u>47.45</u>gm";
                                        document.getElementById('v').innerHTML = "47.45";

                                        document.getElementById('canc').innerHTML = "moisture content W = ((W<sub>2</sub>-W<sub>3</sub>)/(W<sub>3</sub>-W<sub>1</sub>)) = <u>0.139425587467363</u>gm";
                                        document.getElementById("nextButton").style.visibility = "visible";
                                    }, 500);
                                }
                            }, 500);
                        }, 1100);
                    }
                }, 1100);
            }
        }, 500);
    } else (simsubscreennum == 10)
    {

        document.getElementById("e1").style.visibility="hidden";
        document.getElementById("ea").style.visibility="hidden";
        document.getElementById("eb").style.visibility="hidden";
        document.getElementById("13-a").style.visibility="hidden";



        document.getElementById("mark1").style.visibility="visible";
        document.getElementById("mark1").innerHTML="";
        // document.getElementById("res1").style.visibility="visible";
        document.getElementById("res1").disabled=true;
        // document.getElementById("chk1").style.visibility="visible";

        // document.getElementById("sheet1").style.visibility="visible";
        // document.getElementById("sheet2").style.visibility="visible";

        document.getElementById("a01").innerHTML=array[p][0];
        document.getElementById("a02").innerHTML=array[p][1];
        document.getElementById("a03").innerHTML=array[p][2];
        document.getElementById("a04").innerHTML=array[p][3];
        document.getElementById("a05").innerHTML=array[p][4];

        var wd = (array[p][1] - array[p][0])/array[p][3];
        var wc = ((array[p][2] - array[p][3])/(array[p][3] - array[p][1]))*100;
        var dd = wd/(1+wc);
        cnt=0;
        document.getElementById("chk1").onclick=function()
        {
            document.getElementById("2").style.visibility="hidden";
            document.getElementById("fa").style.visibility="hidden";
            document.getElementById("fb").style.visibility="hidden";
            // document.getElementById("hide").style.visibility="visible";

            var id1=document.getElementById("wd");
            var mark1=document.getElementById("mark1");
            var chk1=document.getElementById("chk1");
            var res1=document.getElementById("res1");
            var sheet1=document.getElementById("sheet1");
            validateAnswer(id1, wd, mark1, chk1, res1, sheet1);
        }
        document.getElementById("chk2").onclick=function()
        {
            // document.getElementById("show").style.visibility="visible";

            var id2=document.getElementById("wc");
            var mark2=document.getElementById("mark2");
            var chk2=document.getElementById("chk2");
            var res2=document.getElementById("res2");
            var sheet2=document.getElementById("sheet2");
            validateAnswer(id2, wc, mark2, chk2, res2, sheet2);
        }
        document.getElementById("chk3").onclick=function()
        {
            // document.getElementById("sh").style.visibility="visible";

            var id3=document.getElementById("dd");
            var mark3=document.getElementById("mark3");
            var chk3=document.getElementById("chk3");
            var res3=document.getElementById("res3");
            var sheet3=document.getElementById("sheet2");
            validateAnswer(id3, dd, mark3, chk3, res3, sheet3);
        }
    }
}


function validateAnswer(id,ans,mark,chk,res,sheet)
{
    cnt++;
    if(!id.value || !id.value!=" ")
    {
        alert("Enter the value to proceed ");
    }
    else
    {
        num = id.value;
        if(Math.round(num*100) == Math.round(ans*100))
        {
            mark.style="visibility:visible; color:green; font-size:22px;";
            var right="&#10004;";
            mark.innerHTML=right;
            chk.style.visibility="hidden";
            res.style.visibility="hidden";
            id.style.color="black";
            id.disabled=true;
            id.style.backgroundColor="white";
            setTimeout(function()
            {
                sheet.style.visibility="hidden";

            },250);
            check();
        }
        else
        {
            res.disabled=false;
            var wrong="&#10008;";
            mark.style="visibility:visible; color:red; font-size:22px;";
            mark.innerHTML=wrong;
        }
    }
    res.onclick=function()
    {
        setTimeout(function()
        {
            sheet.style.visibility="hidden";
        },250);
        chk.style.visibility="hidden";
        res.style.visibility="hidden";
        id.value=ans.toFixed(4);;
        id.style.color="black";
        id.disabled=true;
        id.style.backgroundColor="white";
        mark.style.visibility="hidden";
        check();
    }
}

function takeOutCaontainer()
{
    myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:90px; top:235px; height: 30px; z-index: 10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
    document.getElementById("arrow1").style.transform = "rotate(270deg)";
    document.getElementById("13-11").onclick=function()
    {
        myStopFunction();
        $('.door').toggleClass('doorOpen');
        document.getElementById("13-11").onclick="";
        setTimeout(function()
        {
            document.getElementById("13-11").style.visibility="hidden";
            setTimeout(function()
            {
                myInt = setInterval(function(){ animatearrow(); }, 500);
                document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:75px; top:245px; height: 30px; z-index: 10;";
                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                document.getElementById("13-3a").onclick=function()
                {
                    myStopFunction();
                    document.getElementById("13-3a").onclick="";
                    document.getElementById("13-3a").style.animation="placeContainerBack 1.5s forwards";
                    // document.getElementById("13-3b").style.animation="placeContainerwithSoilBack 1.5s forwards";
                    setTimeout(function()
                    {
                        myInt = setInterval(function(){ animatearrow(); }, 500);
                        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:255px; height: 35px; z-index: 10;";
                        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
                        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
                        document.getElementById("arrow1").style.transform = "rotate(0deg)";
                        // document.getElementById("incDoor13-"+repeat).onclick=function()
                        document.getElementById("incDoor13-1").onclick=function()
                        {
                            myStopFunction();
                            // document.getElementById("incDoor13-"+repeat).onclick="";
                            document.getElementById("incDoor13-1").onclick="";
                            $('.door').toggleClass('doorOpen');
                            setTimeout(function()
                            {
                                document.getElementById("13-11").style.visibility="visible";
                                document.getElementById("nextButton").style.visibility="visible";
                            },1150);
                        }
                    },1500);
                }
            },1500);
        },350);
    }
}


function check()
{

    if(document.getElementById("chk3").style.visibility=="hidden")
    {


        document.getElementById("nextButton").style.visibility="visible";

        if(repeat<3)
        {
            simsubscreennum=6;
            p++;

        }
        else

        {
            simsubscreennum==10;
        }
    }
}
