var array=[[2000,7476,5596,1444,11.30,65.14,59.34],
    [2120,7549,5560,1554,11.32,65.17,60.73],
    [2125,7594,5547,1448,11.38,66.15,61.48],
    [2110,7440,5546,1454,11.35,65.28,60.75],
    [2114,7564,5580,1554,11.48,66.44,63.35],
    [2146,7441,5520,1460,11.99,67.95,62.71],
    [2143,7425,2210,1410,12.75,68.30,62.22]];
var randomNum = Math.floor(Math.random() * (7 - 0) + 0);

function navNext()
{
    for (temp = 0; temp <= 7; temp++)
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

        myInt = setInterval(function () {animatearrow();}, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 490px; top: 250px; height: 30px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('a2').onclick = function () {
            myStopFunction();
            document.getElementById('a2').onclick = "";
            document.getElementById('a2').style.animation = "move1 1s forwards";
            setTimeout(function () {
                document.getElementById('can1').innerHTML = "Height of Cylinder = 12.5cm";
                setTimeout(function () {
                    document.getElementById('a2').style.visibility = "hidden";
                    document.getElementById('a8').style.visibility = "visible";
                    document.getElementById('a9').style.visibility = "visible";
                    myInt = setInterval(function () {animatearrow();}, 500);
                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 350px; top: 100px; height: 30px; z-index: 10;";
                    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
                    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
                    document.getElementById("arrow1").style.transform = "rotate(270deg)";
                    document.getElementById('a8').onclick = function () {
                        document.getElementById('a9').onclick = function () {
                            myStopFunction();
                            document.getElementById('a8').onclick = " ";
                            document.getElementById('a9').onclick = " ";
                            document.getElementById('a8').style.animation = "move2 1s  forwards";
                            document.getElementById('a9').style.animation = "move3 1s  forwards";
                            setTimeout(function () {
                                document.getElementById('can2').innerHTML = "Diameter of Cylinder = 10cm";


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
                                        }
                                        else {
                                            var n = 981;
                                            if (document.getElementById('tx').value == n) {
                                                document.getElementById('w1').style.visibility = "hidden";
                                                document.getElementById('result').style.visibility = "visible";
                                                document.getElementById('ch').style.visibility = "hidden";
                                                document.getElementById('re').style.visibility = "hidden";
                                                document.getElementById('nextButton').style.visibility = "visible";
                                            }
                                            else {
                                                document.getElementById('result').style.visibility = "hidden";
                                                document.getElementById('ch').style.visibility = "visible";
                                                document.getElementById('re').style.visibility = "visible";
                                                document.getElementById('w1').style.visibility = "visible";
                                                document.getElementById('ch').onclick = function () { step33(); };
                                                document.getElementById('re').onclick = function () { step38(); };
                                            }

                                            function step38() {
                                                document.getElementById('re').style.visibility = "hidden";
                                                document.getElementById('ch').style.visibility = "hidden";
                                                document.getElementById('can33').style.visibility = "visible";
                                                document.getElementById('nextButton').style.visibility = "visible";
                                            }
                                        }

                                    }
                                }, 500);
                            }, 800);
                        }
                    }
                }, 500);
            }, 800);
        }
    }

    else
    if (simsubscreennum == 2) {

        document.getElementById('ch').style.visibility = "hidden";
        document.getElementById('w1').style.visibility = "hidden";
        document.getElementById('re').style.visibility = "hidden";
        document.getElementById('tx').style.visibility = "hidden";
        document.getElementById('q').style.visibility = "hidden";
        document.getElementById('r1').style.visibility = "hidden";
        document.getElementById('can33').style.visibility = "hidden";
        document.getElementById('cal').style.visibility = "hidden";
        document.getElementById('value').style.visibility = "hidden";
        document.getElementById('formula').style.visibility = "hidden";
        document.getElementById('canV').style.visibility = "hidden";
        document.getElementById('canh').style.visibility = "hidden";
        document.getElementById('cand').style.visibility = "hidden";

        myInt = setInterval(function () {animatearrow();}, 500);
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
                    myInt = setInterval(function () {animatearrow();}, 500);
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
                            setTimeout(function () {
                                myInt = setInterval(function () {animatearrow();}, 500);
                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 535px; top: 420px; height: 30px; z-index: 10;";
                                document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                document.getElementById('ba').onclick = "";
                                setTimeout(function () {
                                    document.getElementById('b6').style.visibility = "hidden";
                                    document.getElementById('b5').style.visibility = "hidden";
                                    document.getElementById('b2').style.visibility = "hidden";

                                    document.getElementById('123').style.visibility = "visible";
                                    document.getElementById('ba').style.visibility = "visible";
                                    document.getElementById('bb').style.visibility = "visible";
                                    myStopFunction();
                                    document.getElementById('b6').style.visibility = "hidden";
                                    document.getElementById('b5').style.visibility = "hidden";
                                    document.getElementById('b2').style.visibility = "hidden";
                                    document.getElementById('ba').onclick = "";
                                    document.getElementById('v3').innerHTML = "0.003";
                                    document.getElementById("123").style.backgroundColor = "lightgrey";

                                    setTimeout(function () {
                                        myInt = setInterval(function () {animatearrow();}, 500);
                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 640px; top: 420px; height: 30px; z-index: 10;";
                                        document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                        document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                        document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                        document.getElementById('bb').onclick = function () {
                                            myStopFunction();
                                            document.getElementById('bb').onclick = " ";
                                            document.getElementById('v3').innerHTML = "00.00";
                                            setTimeout(function () {
                                                myInt = setInterval(function () {animatearrow();}, 500);
                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 50px; top: 300px; height: 30px; z-index: 10;";
                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                document.getElementById('b8').onclick = function () {
                                                    myStopFunction();
                                                    document.getElementById('b8').style.animation = "move5 0.5s  forwards";
                                                    setTimeout(function () {
                                                        document.getElementById('ba').style.visibility = "hidden";
                                                        document.getElementById('b8').style.visibility = "hidden";
                                                        document.getElementById('b7').style.visibility = "visible";
                                                        document.getElementById('can3').innerHTML = "Weight of Sand Pouring Cylinder with sand, (W<sub>1</sub>)  =  <u>7476  gm</u>";
                                                        document.getElementById('v3').innerHTML = "7476";
                                                        document.getElementById('nextButton').style.visibility = "visible";
                                                    }, 500);
                                                }
                                            }, 1000);
                                        }
                                    }, 500);
                                }, 500)
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
        document.getElementById('ba').style.visibility = "hidden";
        document.getElementById('bb').style.visibility = "hidden";
        document.getElementById('b1').style.visibility = "hidden";

        myInt = setInterval(function () {animatearrow();}, 500);
        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 180px; top: 250px; height: 30px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        document.getElementById("arrow1").style.transform = "rotate(0deg)";
        document.getElementById('c2').onclick = function () {
            myStopFunction();
            document.getElementById('c2').style.animation = "move6 1s  forwards";
            setTimeout(function () {
                document.getElementById('c1').style.visibility = "visible";
                document.getElementById('c2').style.visibility = "visible"
                setTimeout(function () {
                    document.getElementById('c1').style.visibility = "hidden";
                    document.getElementById('c2').style.visibility = "hidden";
                    document.getElementById('c3').style.visibility = "visible";
                    document.getElementById('c5').style.visibility = "visible";
                    setTimeout(function () {
                        myInt = setInterval(function () {animatearrow();}, 500);
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
                                    myInt = setInterval(function () {animatearrow();}, 500);
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
                                                myInt = setInterval(function () {animatearrow();}, 500);
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
                                                        myInt = setInterval(function () {animatearrow();}, 500);
                                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 645px; top: 440px; height: 30px; z-index: 10;";
                                                        document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                        document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                        document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                        document.getElementById('cb').onclick = function () {
                                                            myStopFunction();
                                                            document.getElementById('cb').onclick = " ";
                                                            document.getElementById('v4').innerHTML = "00.00";
                                                            setTimeout(function () {
                                                                myInt = setInterval(function () {animatearrow();}, 500);
                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 130px; top: 280px; height: 30px; z-index: 10;";
                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                                document.getElementById('c2').onclick = function () {
                                                                    myStopFunction();
                                                                    document.getElementById('c2').style.animation = "move9 1s  forwards";
                                                                    setTimeout(function () {
                                                                        document.getElementById('c7').style.visibility = "hidden";
                                                                        document.getElementById('c2').style.visibility = "hidden";
                                                                        document.getElementById('c10').style.visibility = "visible";
                                                                        document.getElementById('can4').innerHTML = "Weight of Sand in Conical Portion, (W<sub>2</sub>)  =  <u>5596  gm</u>";
                                                                        document.getElementById('v4').innerHTML = "5596";
                                                                        setTimeout(function () {
                                                                            document.getElementById('can4').style.visibility = "hidden";
                                                                            document.getElementById('v4').style.visibility = "hidden";
                                                                            document.getElementById('c10').style.visibility = "hidden";
                                                                            document.getElementById('c2').style.visibility = "visible";
                                                                            setTimeout(function () {
                                                                                myInt = setInterval(function () {animatearrow();}, 500);
                                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 650px; top: 200px; height: 30px; z-index: 10;";
                                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
                                                                                document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
                                                                                document.getElementById("arrow1").style.transform = "rotate(360deg)";
                                                                                document.getElementById('c2').onclick = function () {
                                                                                    myStopFunction();
                                                                                    document.getElementById('c2').style.animation = "move10 3s  forwards";
                                                                                    setTimeout(function () {
                                                                                        document.getElementById('c8').style.visibility = "visible";
                                                                                        document.getElementById('c11').style.visibility = "visible";
                                                                                        document.getElementById('c2').style.visibility = "hidden";
                                                                                        document.getElementById('c5').style.visibility = "visible";
                                                                                        setTimeout(function () {
                                                                                            myInt = setInterval(function () {animatearrow();}, 500);
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
                                                                                                    myInt = setInterval(function () {animatearrow();}, 500);
                                                                                                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 50px; top: 350px; height: 30px; z-index: 10;";
                                                                                                    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                                                                    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                                                                    document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                                                                    document.getElementById('c5').onclick = function () {
                                                                                                        myStopFunction();
                                                                                                        document.getElementById('c5').style.animation = "move12 1s  forwards";
                                                                                                        setTimeout(function () {
                                                                                                            document.getElementById('c5').style.visibility = "hidden";
                                                                                                            document.getElementById('c11').style.visibility = "hidden";
                                                                                                            document.getElementById('c9').style.visibility = "visible";
                                                                                                            document.getElementById('c2').style.visibility = "visible";
                                                                                                            setTimeout(function () {
                                                                                                                document.getElementById('c8').style.visibility = "hidden";
                                                                                                                document.getElementById('c2').style.visibility = "hidden";
                                                                                                            }, 500);
                                                                                                        }, 1100);
                                                                                                        setTimeout(function () {
                                                                                                            myInt = setInterval(function () {animatearrow();}, 500);
                                                                                                            document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 540px; top: 440px; height: 30px; z-index: 10;";
                                                                                                            document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                                                                            document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                                                                            document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                                                                            document.getElementById('ca').onclick = function () {
                                                                                                                myStopFunction();
                                                                                                                document.getElementById('ca').onclick = " ";
                                                                                                                document.getElementById('v41').innerHTML = "0.003";
                                                                                                                document.getElementById("d18").style.backgroundColor = "lightgrey";
                                                                                                                setTimeout(function () {
                                                                                                                    myInt = setInterval(function () {animatearrow();}, 500);
                                                                                                                    document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 645px; top: 440px; height: 30px; z-index: 10;";
                                                                                                                    document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                                                                                    document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                                                                                    document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                                                                                    document.getElementById('cb').onclick = function () {
                                                                                                                        myStopFunction();
                                                                                                                        document.getElementById('cb').onclick = " ";
                                                                                                                        document.getElementById('v41').innerHTML = "00.00";
                                                                                                                        setTimeout(function () {
                                                                                                                            myInt = setInterval(function () {animatearrow();}, 500);
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
                                                                                                                                        myInt = setInterval(function () {animatearrow();}, 500);
                                                                                                                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 430px; top: 350px; height: 30px; z-index: 10;";
                                                                                                                                        document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                                                                                                        document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                                                                                                        document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                                                                                                        document.getElementById('c13').onclick = function () {
                                                                                                                                            myStopFunction();
                                                                                                                                            document.getElementById('c13').style.animation = "move133 1s  forwards";
                                                                                                                                            setTimeout(function () {
                                                                                                                                                document.getElementById('c14').style.visibility = "hidden";
                                                                                                                                                document.getElementById('c13').style.visibility = "hidden";
                                                                                                                                                document.getElementById('c15').style.visibility = "visible";
                                                                                                                                                document.getElementById('can4').style.visibility = "visible";
                                                                                                                                                document.getElementById('can41').innerHTML = "Weight of Sand Pouring Cylinder  +  Sand after filling CalibratingCylinder and Conical Portion  (W<sub>3</sub>) =  <u>436  gm</u>";
                                                                                                                                                document.getElementById('v41').innerHTML = "436";
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
                                                                            }, 500)
                                                                        }, 1000);
                                                                    }, 1500);
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
    }
    else if (simsubscreennum == 4) {
        document.getElementById('c15').style.visibility = "hidden";
        document.getElementById('can4').style.visibility = "hidden";
        document.getElementById('v4').style.visibility = "hidden";
        document.getElementById('can41').style.visibility = "hidden";

        myInt = setInterval(function () {animatearrow();}, 500);
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
                document.getElementById('d2').style.visibility = "visible";
                setTimeout(function () {
                    document.getElementById('d4').style.visibility = "visible";
                    document.getElementById('d3').style.visibility = "hidden";
                    document.getElementById('d2').style.visibility = "hidden";
                    document.getElementById('d1').style.visibility = "hidden";
                    document.getElementById('d6').style.visibility = "visible";
                    setTimeout(function () {
                        myInt = setInterval(function () {animatearrow();}, 500);
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
                                document.getElementById('d12').style.visibility = "visible";
                                myInt = setInterval(function () {animatearrow();}, 500);
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
                                        myInt = setInterval(function () {animatearrow();}, 500);
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
                                                myInt = setInterval(function () {animatearrow();}, 500);
                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 380px; top: 350px; height: 30px; z-index: 10;";
                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
                                                document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
                                                document.getElementById("arrow1").style.transform = "rotate(360deg)";
                                                document.getElementById('d13').onclick = function () {
                                                    myStopFunction();
                                                    document.getElementById('d5').style.animation = "move23 2s  forwards";
                                                    setTimeout(function () {
                                                        document.getElementById('d5').style.visibility = "hidden";
                                                        document.getElementById('d14').style.visibility = "visible";
                                                        document.getElementById('d13').style.visibility = "visible";
                                                    }, 500);
                                                    setTimeout(function () {
                                                        myInt = setInterval(function () {animatearrow();}, 500);
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
                                                                myInt = setInterval(function () {animatearrow();}, 500);
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
                                                                        myInt = setInterval(function () {animatearrow();}, 500);
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
                                                                                myInt = setInterval(function () {animatearrow();}, 500);
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
                                                                                        myInt = setInterval(function () {animatearrow();}, 500);
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
                                                                                                myInt = setInterval(function () {animatearrow();}, 500);
                                                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 650px; top: 440px; height: 30px; z-index: 10;";
                                                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                                                                document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                                                                document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                                                                document.getElementById('db').onclick = function () {
                                                                                                    myStopFunction();
                                                                                                    document.getElementById('db').onclick = " ";
                                                                                                    document.getElementById('v5').innerHTML = "00.00";

                                                                                                    setTimeout(function () {
                                                                                                        myInt = setInterval(function () {animatearrow();}, 500);

                                                                                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 100px; top: 290px; height: 30px; z-index: 10;";
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
                                                                                                                document.getElementById('can5').innerHTML = "Total weight of exacting soil=867gm";
                                                                                                                document.getElementById('v5').innerHTML = "867.6";
                                                                                                            }, 1100);
                                                                                                            setTimeout(function () {
                                                                                                                document.getElementById('d28').style.visibility = "hidden";
                                                                                                                document.getElementById('d19').style.visibility = "visible";
                                                                                                                document.getElementById('can5').style.visibility = "hidden";
                                                                                                                document.getElementById('v5').style.visibility = "hidden";
                                                                                                            }, 2000);

                                                                                                            setTimeout(function () {
                                                                                                                myInt = setInterval(function () {animatearrow();}, 500);
                                                                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 530px; top: 440px; height: 30px; z-index: 10;";
                                                                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                                                                                document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                                                                                document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                                                                                document.getElementById('da').onclick = function () {
                                                                                                                    myStopFunction();
                                                                                                                    document.getElementById('da').onclick = " ";
                                                                                                                    document.getElementById('v51').innerHTML = "0.003";
                                                                                                                    setTimeout(function () {
                                                                                                                        myInt = setInterval(function () {animatearrow();}, 500);
                                                                                                                        document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 650px; top: 440px; height: 30px; z-index: 10;";
                                                                                                                        document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
                                                                                                                        document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
                                                                                                                        document.getElementById("arrow1").style.transform = "rotate(90deg)";
                                                                                                                        document.getElementById('db').onclick = function () {
                                                                                                                            myStopFunction();
                                                                                                                            document.getElementById('db').onclick = " ";
                                                                                                                            document.getElementById('v51').innerHTML = "00.00";

                                                                                                                            setTimeout(function () {
                                                                                                                                myInt = setInterval(function () {animatearrow();}, 500);
                                                                                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 150px; top: 330px; height: 30px; z-index: 10;";
                                                                                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                                                                                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                                                                                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                                                                                                document.getElementById('d19').onclick = function () {
                                                                                                                                    myStopFunction();
                                                                                                                                    document.getElementById('d19').style.animation = "move30 1s  forwards";
                                                                                                                                    setTimeout(function () {
                                                                                                                                        document.getElementById('can5').style.visibility = "visible";
                                                                                                                                        document.getElementById('d19').style.visibility = "visible";
                                                                                                                                        document.getElementById('can5').innerHTML = "Weight of empty cup, a(gm) = 11.30 gm";
                                                                                                                                        document.getElementById('v51').innerHTML = "11.30";
                                                                                                                                        document.getElementById('nextButton').style.visibility = "visible";
                                                                                                                                    }, 500);
                                                                                                                                }
                                                                                                                            }, 1500);
                                                                                                                        }
                                                                                                                    }, 1100);
                                                                                                                }
                                                                                                            }, 2500);
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
                            }, 9000);
                        }
                    }, 600);
                }, 2000);
            }, 1100);
        }


    } else if (simsubscreennum == 5) {
        document.getElementById('da').style.visibility = "hidden";
        document.getElementById('db').style.visibility = "hidden";
        document.getElementById('d18').style.visibility = "hidden";
        document.getElementById('d19').style.visibility = "hidden";
        document.getElementById('can5').style.visibility = "hidden";
        document.getElementById('v5').style.visibility = "hidden";
        document.getElementById('e1').style.visibility = "hidden";
        document.getElementById('e3').style.visibility = "visible";
        document.getElementById('e4').style.visibility = "visible";
        document.getElementById('e5').style.visibility = "visible";
        document.getElementById('e6').style.visibility = "visible";
        document.getElementById('e10').style.visibility = "visible";
        document.getElementById('ea').style.visibility = "hidden";
        document.getElementById('eb').style.visibility = "hidden";

        myInt = setInterval(function () {animatearrow();}, 500);
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
                    myInt = setInterval(function () {animatearrow();}, 1000);
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
                            myInt = setInterval(function () {animatearrow();}, 500);
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
                                            myInt = setInterval(function () {animatearrow();}, 500);
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
                                                    myInt = setInterval(function () {animatearrow();}, 1000);
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
                                                                myInt = setInterval(function () {animatearrow();}, 1000);
                                                                document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left: 90px; top: 380px; height: 30px; z-index: 10;";
                                                                document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
                                                                document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
                                                                document.getElementById("arrow1").style.transform = "rotate(180deg)";
                                                                document.getElementById('e9').onclick = function () {
                                                                    myStopFunction();
                                                                    document.getElementById('e9').style.animation = "move351 0.5s  forwards";
                                                                    setTimeout(function () {
                                                                        document.getElementById('can8').innerHTML = "Weight of cup+wet soil,b(gm) =65.14gm";
                                                                        document.getElementById('v8').innerHTML = "65.14";
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
    }
    else if(simsubscreennum == 6)
    {
        document.getElementById("v8").style.visibility="hidden";
        document.getElementById("can8").style.visibility="hidden";
        document.getElementById("e9").style.visibility="visible";
        document.getElementById("e1").style.visibility="hidden";
        document.getElementById("ea").style.visibility="hidden";
        document.getElementById("eb").style.visibility="hidden";
        document.getElementById("13-11").style.visibility = "visible";
        document.getElementById("incDoor13-"+repeat).style="visibility:visible;";
        document.getElementById("13-12").innerHTML="&nbsp;105";

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
                    document.getElementById("13-3b").style.animation="placeContainerwithSoilinOven 1.5s forwards";
                    setTimeout(function()
                    {
                        myInt = setInterval(function(){ animatearrow(); }, 500);
                        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:255px; height: 35px; z-index: 10;";
                        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
                        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
                        document.getElementById("arrow1").style.transform = "rotate(0deg)";
                        document.getElementById("incDoor13-"+repeat).onclick=function()
                        {
                            myStopFunction();
                            document.getElementById("incDoor13-"+repeat).onclick="";
                            $('.door').toggleClass('doorOpen');
                            setTimeout(function()
                            {
                                document.getElementById("13-11").style.visibility="visible";

                                var temp=105;
                                myInt = setInterval(function(){ animatearrow(); }, 500);
                                document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:215px; top:147px; height: 25px; z-index: 10;";
                                document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
                                document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
                                document.getElementById("arrow1").style.transform = "rotate(270deg)";
                                document.getElementById("13-13").onclick=function()
                                {
                                    if(temp<111)
                                    {
                                        temp++;
                                        document.getElementById("13-12").innerHTML="&nbsp;"+temp;
                                    }
                                    if(temp>=110)
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

    else (simsubscreennum == 7)
    {
        document.getElementById('e1').style.visibility = "hidden";
        document.getElementById('ea').style.visibility = "hidden";
        document.getElementById('eb').style.visibility = "hidden";
        document.getElementById('v9').style.visibility = "hidden";
        document.getElementById('can9').style.visibility = "hidden";
        document.getElementById('e20').style.visibility = "hidden";

        document.getElementById('a01').innerHTML = array[randomNum][0];
        document.getElementById('a02').innerHTML = array[randomNum][1];
        document.getElementById('a03').innerHTML = array[randomNum][2];
        document.getElementById('a04').innerHTML = array[randomNum][3];
        document.getElementById('a05').innerHTML = array[randomNum][4];
        document.getElementById('a06').innerHTML = array[randomNum][5];
        document.getElementById('a07').innerHTML = array[randomNum][6];


    }
    //step0
    document.getElementById('check1').onclick = function () {step001();};
    document.getElementById('check2').onclick = function () {step002();};
    document.getElementById('check3').onclick = function () {step003();};

    function step001() {
        if (document.getElementById('t1').value == "") {
            alert("Enter the value to proceed");
        } else {
            var num = 1444;
            if (document.getElementById('t1').value == num) {
                document.getElementById('value1').style.visibility = "visible";
                document.getElementById('t1').style.visibility = "hidden";
                document.getElementById('check1').style.visibility = "hidden";
                document.getElementById('f1').style.visibility = "visible";
            } else {
                document.getElementById('r1').style.visibility = "visible";
                document.getElementById('bca').style.visibility = "visible";
                document.getElementById('abc').style.visibility = "hidden";
                document.getElementById('f1').style.visibility = "visible";
            }
            document.getElementById('r1').onclick = function () {
                step0001();
            };
        }
    }
    function step0001() {
        document.getElementById('bca').style.visibility = "hidden";
        document.getElementById('value1').style.visibility = "visible";
        document.getElementById('t1').style.visibility = "hidden";
        document.getElementById('check1').style.visibility = "hidden";
        document.getElementById('r1').style.visibility = "hidden";
        document.getElementById('cal').style.visibility = "hidden";
        document.getElementById('f1').style.visibility = "visible";
    }

    function step002() {
        if (document.getElementById('t2').value == "") {
            alert("Enter the value to proceed");
        } else {
            var num = 1.4708;
            if (document.getElementById('t2').value == num) {
                document.getElementById('abc11').style.visibility = "visible";
                document.getElementById('value2').style.visibility = "visible";
                document.getElementById('t2').style.visibility = "hidden";
                document.getElementById('check2').style.visibility = "hidden";
                document.getElementById('f2').style.visibility = "visible";
            } else {
                document.getElementById('r2').style.visibility = "visible";
                document.getElementById('bca11').style.visibility = "visible";
                document.getElementById('abc11').style.visibility = "hidden";
                document.getElementById('f2').style.visibility = "visible";
            }
            document.getElementById('r2').onclick = function () {
                step0002();
            };
        }

        function step0002() {
            document.getElementById('bca11').style.visibility = "hidden";
            document.getElementById('value2').style.visibility = "visible";
            document.getElementById('t2').style.visibility = "hidden";
            document.getElementById('check2').style.visibility = "hidden";
            document.getElementById('r2').style.visibility = "hidden";
            document.getElementById('ca2').style.visibility = "hidden";
            document.getElementById('f2').style.visibility = "visible";
        }
        document.getElementById('r3').onclick = function () {
            step003();
        };
    }
    function step003() {
        if (document.getElementById('t3').value == "") {
            alert("Enter the value to proceed");
        } else {
        }
        var num = 10;
        if (document.getElementById('t3').value == num) {
            document.getElementById('value3').style.visibility = "visible";
            document.getElementById('t3').style.visibility = "hidden";
            document.getElementById('check3').style.visibility = "hidden";
            document.getElementById('f3').style.visibility = "visible";
        } else {
            document.getElementById('r3').style.visibility = "visible";
            document.getElementById('bca22').style.visibility = "visible";
            document.getElementById('abc22').style.visibility = "hidden";
            document.getElementById('f3').style.visibility = "visible";
        }
        document.getElementById('r3').onclick = function () {
            step0003();
        };
    }
    function step0003() {
        document.getElementById('bca22').style.visibility = "hidden";
        document.getElementById('abc22').style.visibility = "hidden";
        document.getElementById('value3').style.visibility = "visible";
        document.getElementById('t3').style.visibility = "hidden";
        document.getElementById('check3').style.visibility = "hidden";
        document.getElementById('r3').style.visibility = "hidden";
        document.getElementById('ca3').style.visibility = "hidden";
        document.getElementById('f3').style.visibility = "visible";
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
                    document.getElementById("13-3b").style.animation="placeContainerwithSoilBack 1.5s forwards";
                    setTimeout(function()
                    {
                        myInt = setInterval(function(){ animatearrow(); }, 500);
                        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:255px; height: 35px; z-index: 10;";
                        document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
                        document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
                        document.getElementById("arrow1").style.transform = "rotate(0deg)";
                        document.getElementById("incDoor13-"+repeat).onclick=function()
                        {
                            myStopFunction();
                            document.getElementById("incDoor13-"+repeat).onclick="";
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
