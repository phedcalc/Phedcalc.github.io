html {
  box-sizing: border-box;
  -webkit-appearance: none;
  -webkit-appearance: button;
  -webkit-appearance: pushbutton;
}
*, *:before, *:after {
  margin: 0;
  padding: 0;
}
.green-text {
  color: green;
}
.form-container .btn-primary, .output .btn-primary {
  background-color: #008ECC;
  outline: none !important;
  border: none !important
}
.form-container .btn-primary:focus, .output .btn-primary:focus {
  outline: none !important;
  border: none !important
}
.output .bill {
  background-color: lightblue
}
input:focus::placeholder {
  color: transparent;
}
body {
  background: #F0F1D5;
/*  background:rgba(77,66,66,1.00);*/
/*
	width: 100vw !important;
	padding: 0;
	margin: 0;
*/
/*	padding: 0!important;*/
}
.logo-txt h2 {
  font-size: 40px
}
.DTRloading__form ::placeholder {
  text-align: center
}
input[type=number]:focus {
  background-color: white;
  outline: 2px solid #9999FF !important
}
.b-display {
  font-size: 30px;
}
.phase input {
  width: 170px !important;
/*	padding: 30px;*/
  height: 80px;
  font-size: 25px;
  margin-bottom: 24px !important
}

.info {
  border-top: 2px solid #5F8D4E;
  border-bottom: 2px solid #5F8D4E;
  height: 50px;
  margin-bottom: 30px;
  margin-top: 28px;
  font-size: 30px;
  padding: 0px
}
.tips {
  font-size: 30px;
  text-align: center;
	padding-left: 10%;
	padding-right: 10%;
	
}
.container {
/*  width:  100%;*/
/*  min-width:  100%;*/
	display: flex;
	background-color: #F0F1D5;
	
/*	background-color: darkorange;*/

/*	overflow: hidden!important*/
}
.logo {
	font-family: Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, "sans-serif";
	
  min-height: 92vh;
  padding-bottom: 8em;
  background: #F0F1D5;
/*	background-color: lightcoral;*/
  color: #105187;
/*	position: relative*/
	overflow: hidden;
		width: 100vw;
/*	  background-color: blueviolet;*/
	
/*
	  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
*/
	 /* Centering styles */
/*	position: absolute;*/
/*
   margin-left: auto;
  margin-right: auto;
*/
}
.calc-container {
  min-height: 50vh;
}
.cont-wrapper {
	
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2em;
	overflow: hidden;
}
.logo #tariffScroll{
	font-size: 30px;
/*	position:fixed;

/*
  display: flex;
  align-items: center;  This will vertically center the items in the container 
*/
}
div .phed {
  width: 70vw;
  height: auto;
/*  margin-right: 30px;*/
}
.phase label {
  font-size: 22px
}
.form-container, .output {
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin: 1em;
  justify-content: center;
  align-items: center;
}
.output {
  display: content;
}
.form-control {
  margin-bottom: 20px;
  width: 70%;
/*	padding: 50px;*/
  border: 1px solid #1174A8;
  text-align: center;
}
.load{
  padding: 50px 20px;
  font-size: 30px;
}
.loadA {
  padding: 50px 20px;
	
/*	EDITED*/
	
  font-size: 35px !important;     
/*	color: blue*/
}
select {
  font-size: 35px;
/*  padding: 30px;*/
	
}
.select-input {
  font-size: 35px!important;
	text-align: center
/*  padding: 30px;*/
	
}

.btn {
  width: 70vw;
  height: 12rem;
  box-shadow: 2px 3px 1px rgba(16, 81, 135, .2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.drop-down-caret {
  height: 100px;
  font-size: 60px;
}
.btn:hover {
  box-shadow: 1px 3px 1px rgba(241, 151, 35, .4);
  color: whitesmoke;
}
.btn:active, .btn:visited {
  outline: 0 none !important;
}
.btn2:focus {
  outline: none !important;
}
.bill {
  text-align: center;
  height: 100px;
  font-size: 60px;
  padding: 10px;
}
.discDiv {
  display: flex;
  width: 70vw;
}
.discDiv div {
  width: 100%;
/*
	margin-left: 5%;
	margin-right: 5%
*/
}
.pay {
  margin-right: 1px;
  font-size: 50px
}
.disc {
  float: right;
  font-size: 50px
}
.billing__button, .billingKW__button, .lor__button, .billingKwh__button, .fuse__button, .DTRloading__button {
  background-color: #008ECC;
  border: 1px solid #008ECC;
  border-radius: 50px;
  width: 20rem;
  padding: 28px;
  max-height: 45px;
  font-size: 22px;
  color: white;
}
.billing-button-container {
  width: 100%;
  margin-top: 14px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
}
.btn2 {
  font-size: 40px !important;
  color: white !important;
}


.status {
  font-size: 40px;
}
.billing__button:hover, .billingKW__button:hover, .lor__button:hover, .billingKwh__button:hover, .fuse__button:hover, .DTRloading__button:hover {
  background: A4BE7B;
  border: 2px solid white !important;
  color: white;
  box-shadow: none;
}
.billing__button:focus, .billing__button.focus, .billingKW__button:focus, .billingKW__button.focus, .lor__button:focus, .lor__button.focus, .billingKwh__button:focus, .billingKwh__button.focus, .fuse__button:focus, .fuse__button.focus, .DTRloading__button:focus, .DTRloading__button.focus {
  outline: none !important;
  border-: 1px solid white;
}
.billing__button:active, .billing__button.active, .billingKW__button:active, .billingKW__button.active, .lor__button:active, .lor__button.active, .billingKwh__button:active, .billingKwh__button.active, .fuse__button:active, .fuse__button.active, .DTRloading__button:active, .DTRloading__button.active {
  background-color: white;
  color: #008ECC;
  box-shadow: none;
}
.hidden_clip {
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute;
}
input, label {
  display: block;
  text-align: center
}
.formInline {
  margin: 0px 10px 10px
}
.formInline2 {
  margin: 10px 5px
}
#marquee-cont marquee {
  margin-top: 5px;
}

.btn:focus {
  outline: none !important
}
.btn:hover {
  outline: none !important
}
#yellow, #red, #blue, #neutral {
  font-weight: 400
}
.page {
  position: relative;
  /*	max-width: 980px;*/
  margin: 0 auto;

}
/**/
/* main styles */
/**/
.pcss3t {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  font-size: 0;
  text-align: center;
}
.pcss3t > input {
  position: absolute;
  left: -9999px;
}
.pcss3t > label {
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: all 0.1s;
  -o-transition: all 0.1s;
  -ms-transition: all 0.1s;
  -moz-transition: all 0.1s;
  -webkit-transition: all 0.1s;
}
.pcss3t > input:checked + label {
  cursor: default;
}
.pcss3t > ul {
  list-style: none;
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  font-size: 13px;
}
.pcss3t > ul > li {
  position: absolute;
  width: 100%;
  overflow: auto;
  /*	padding: 30px 40px 40px;*/
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  opacity: 0;
  transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
}
.pcss3t > .tab-content-first:checked ~ ul .tab-content-first, .pcss3t > .tab-content-2:checked ~ ul .tab-content-2 {
  /*	z-index: 1;*/
  top: 0;
  left: 0;
  opacity: 1;
  -webkit-transform: scale(1, 1);
  -webkit-transform: rotate(0deg);
}
/*----------------------------------------------------------------------------*/
/*                                 EXTENSIONS                                 */
/*----------------------------------------------------------------------------*/

.pcss3t-height-auto > .tab-content-first:checked ~ ul .tab-content-first, .pcss3t-height-auto > .tab-content-2:checked ~ ul .tab-content-2 {
  display: block;
}
.pcss3t .grid-row:after {
  content: '';
  display: table;
  clear: both;
}
.pcss3t .grid-row:first-child {
  margin-top: 0;
}
.pcss3t .grid-col:first-child {
  /*	margin-left: 0;*/
}
.pcss3t-steps > label {
  cursor: default;
}
/**/
/* animation effects */
/**/
.pcss3t-effect-scale > ul > li {
  -webkit-transform: scale(0.1, 0.1);
}
.pcss3t-effect-rotate > ul > li {
  -webkit-transform: rotate(180deg);
}
.pcss3t-effect-slide-top > ul > li {
  top: -40px;
}
.pcss3t-effect-slide-right > ul > li {
  left: 80px;
}
.pcss3t-effect-slide-bottom > ul > li {
  top: 40px;
}
.pcss3t-effect-slide-left > ul > li {
  left: -80px;
}
/*----------------------------------------------------------------------------*/
/*                                   LAYOUTS                                  */
/*----------------------------------------------------------------------------*/

.pcss3t-layout-top-right {
  text-align: right;
}

.pcss3t-layout-top-center {
  text-align: center;
}

/*----------------------------------------------------------------------------*/
/*                                   THEMES                                   */
/*----------------------------------------------------------------------------*/

.pcss3t > label {
  
}
.pcss3t > label:hover {
}
.pcss3t > input:checked + label {
  background: #fff;
}
.pcss3t > ul {
  width: 100%;
  padding-bottom: 160px;
  /*	background-color:*/
  text-align: left;
}
.pcss3t-steps > label:hover {
  /*	background: #e5e5e5;	*/
}

.pcss3t-theme-1 > label:hover {
  /*	background: #fff;*/
  opacity: 1;
}
.pcss3t-theme-1 > label:active {
  background: #fff;
  /*	opacity: 1;*/
}
.pcss3t-theme-1 > input:checked + label {
  margin-bottom: 0;
  padding-bottom: 2px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom: 1px solid #008ECC;
  color: #2b82d9;
  opacity: 1;
}
.pcss3t-theme-1 > ul {
  border-radius: 5px;
  
  width: 80vw 
}
.pcss3t-theme-1 > .tab-content-first:checked ~ ul {
  border-top-left-radius: 0;
}

.pcss3t > ul, .pcss3t > ul > li {
 
  margin-top: 2px;
  /*	margin-bottom: 5px;*/
  overflow: hidden
}
.pcss3t-theme-1 > label {
  margin: 0px 40px;
  /*	width: 40%;*/
  padding: 10px 0px;
  font-size: 22px;
  width: 30vw;
  height: 60px;
  /*	height: auto;*/
  border-radius: 5px;
  background: #008ECC;
  color: #fff;
  opacity: 0.8;
  overflow: hidden 
}
.pcss3t .singleA input {
  width: 70vw;
  height: 80px;
  margin-top: -7px;
  overflow: hidden;
  font-size: 30px;
	text-align: center;
	margin-left: auto;
  margin-right: auto;
}


.phaseAmp input {
  width: 155px!important ;
  height: 80px;
  font-size: 30px;
  text-align: center !important;
}
.phaseAmp label {
  font-size: 22px;
  margin-bottom: -6px;
}


@media screen and (min-width: 1024px) {
  body {
    background: #534484;
  }
	.logo #tariffScroll{
	font-size: 15px;
}
	.select-input {
  font-size: 15px!important;
/*  padding: 30px;*/
	
}
  .btn2 {
    font-size: 24px !important;
  }
  .logo-txt h2 {
    font-size: 20px
  }
  .status {
    font-size: 18px;
  }
  .bill {
    height: 40px;
    font-size: 20px;
    padding: 2px;
    font-weight: bold;
  }
  .discDiv {
    width: 60%;
  }
  .load, .loadA {
    padding: 5px 10px;
    margin: 0px;
  }
	.loadA{
		font-size: 16px !important;
	}
  .b-display {
    font-size: 16px;
  }
  .phase input {
    width: 80px !important;
    height: auto;
    font-size: 16px;
    margin-bottom: 12px !important;
    margin-top: -5px !important
  }
  .phase label {
    font-size: 12px
  }
  .phaseAmp input {
    width: 80px !important ;
    height: auto;
    font-size: 16px;
    margin-top: -7px !important;
	}
	
  .phaseAmp label {
    font-size: 12px;
    margin-bottom: 5px;
  }
  div .phed {
    width: 24vw;
    height: auto;
  }
  .form-container, .output {
    width: 50vw;
  }
  .btn {
    width: 60%;
    height: 3rem;
  }
  .btn2 {
    font-size: 18px !important;
  }
  .logo {
    box-shadow: 1px 2px 2px rgba(0, 0, 0, .2);
    padding-bottom: 0px;
	  width: 100%;
	  min-height: 100vh;
	  
  }
  .container {
/*    min-width: 50%;*/
    width: 65%;
	  background-color: gray;
	  box-shadow: 1px 3px 10px 12px rgba(0, 0, 0, .2);
  }
  .form-control {
    text-align: center;
    margin-bottom: 6px;
    width: 60%;
    border: 1px solid #AE5AD3;
  }
  .billing__button, .billingKW__button, .lor__button, .billingKwh__button, .fuse__button, .DTRloading__button {
    font-size: 14px;
    margin: 0 auto;
    width: 11rem;
    max-height: 30px;
    color: white;
    padding: 10px
  }
  .billing-button-container {
    width: 65%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
  }
  .info {
    border-top: 1px solid #5F8D4E;
    border-bottom: 1px solid #5F8D4E;
    margin-bottom: 10px;
    height: 30px;
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    padding: 1px;
  }
  .tips {
    font-size: 16px
  }
  .drop-down-caret, .load, .form-control {
    height: 30px;
    font-size: 16px;
  }
/*
  #marquee-cont {
    position: sticky;
    bottom: 0px;
    left: 0px;
    width: 100%;
    text-align: center;
    font-size: 16px
  }
*/
/*
  table img {
    width: 80px;
    height: auto;
  }
*/
  .pcss3t > ul {
    width: 100%;
      margin-top: 8px;
    padding-bottom: 65px;
    /*	background-color:*/
    text-align: left;
  }
  .pcss3t-theme-1 > label {
    width: 14vw;
    margin: 0px 10px;
    font-size: 13px;
    padding: 4px 0px;
    height: 30px;
  }
  .pcss3t .singleA input {
    width: 30vw;
    margin-top: -7px;
    height: 30px;
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
	.container{
		min-width: 100%
	}
	
}
