const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    header {
      position: sticky;
      top: 0;
      background-color: white;
	  z-index: 2;
    }
	footer {
		position: fixed;
		bottom: 50%;
		z-index: 2;
		font-size: 8px;
	}
	.link{
		position: fixed;
		bottom: 50%;
		z-index: 2;
		margin-left: 10px;
	}
	.link:hover{
		border: 2px dashed green;
		border-radius: 8px;
	}
	.link2{
		position: fixed;
		bottom: 42%;
		z-index: 2;
		margin-left: 10px;
	}
	.link2:hover{
		border: 2px dashed green;
		border-radius: 8px;
	}
	#nav{
      border:1px solid grey;
      border-width:1px 0;
      list-style:none;
      margin:0;
      padding:0;
      text-align:center;
	  font-size: 11px;
	  font-family:Martian Mono;
	  
    }
    #nav li{
      position:relative;
      display:inline;
    }
    #nav a{
      display:inline-block;
      padding:5px 10px;
    }
    #nav ul{
      position:absolute;
      /*top:100%; Uncommenting this makes the dropdowns work in IE7 but looks a little worse in all other browsers. Your call. */
      left:-9999px;
      margin:0;
      padding:0;
      text-align:left;
    }
    #nav ul li{
      display:block;
    }
    #nav li:hover ul{
      left:0;
    }
    #nav li:hover a{
      text-decoration:underline;
      background:#f1f1f1;
    }
    #nav li:hover ul a{
      text-decoration:none;
      background:solid;
    }
    #nav li:hover ul a:hover{
      text-decoration:underline;
      background:#f1f1f1;
    }
    #nav ul a{
      white-space:normal;
      display:block;
      border-bottom:1px solid #ccc;
    }
    a{
      color:#c00;
      text-decoration:none;
      font-weight:bold;
    }
    a:hover{
      text-decoration:underline;
      background:#f1f1f1;
    }
	
	@media (max-width:768px) {	
		.link{
			width: 30px;
			margin-left: 7px;
			bottom: 50%;
		}
		.link2{
			width: 30px;
			margin-left: 7px;
			bottom: 45%;
		}
		}
	
	@media (max-width:400px) {	
		#nav{
			border:1px solid grey;
			border-width:1px 0;
			list-style:none;
			margin:0;
			padding:0;
			text-align:center;
			font-size: 9px;
			font-family:Martian Mono;
		}
		.link{
			width: 15px;
			margin-left: 4px;
			bottom: 50%;
		}
		.link2{
			width: 15px;
			margin-left: 4px;
			bottom: 47%;
		}
		}
  </style>
  

  <header>
    <ul id="nav">

		<li>
		<a href="index.html">Tadabbur</a>
		</li>

		<li>
		<a href="persoalan.html">Persoalan</a>
		</li>
		
		<li>
		<a href="#">Forms</a>
		<ul>
			<li><a href="003-forms.html">Ngaji</a></li>
		</ul>
		</li>
		
		<li>
		<a href="#">Nota</a>
		<ul>
			<li><a href="home.html">General</a></li>
			<li><a href="home-tajwid.html">Tajwid</a></li>
		</ul>
		</li>

	</ul>
  </header>

	<img class="link" src="https://img.icons8.com/color/48/facebook.png" onclick="window.open('https://www.facebook.com/baz.li.3', '_blank')">
	<img class="link2" src="https://img.icons8.com/color/48/whatsapp--v1.png" onclick="window.open('https://wa.me/601165402468', '_blank')">
`;

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
