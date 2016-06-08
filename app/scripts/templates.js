angular.module("portal.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/accesos-lista.tpl.html","<div class=\"container\">\r\n	<div class=\"row\">\r\n		<div class=\"col-md-12\">\r\n			<section class=\"shadow-z-3 \" ng-init=\"Accesos=\'herramientas\'\" style=\"overflow:hidden;\">\r\n				<div class=\"acceso-titulo\">Accesos directos\r\n				<div class=\"\" style=\"float:right; margin-top:-15px;\">\r\n				<a href=\"#\" class=\"btn   btn-default btn-xs\" ng-click=\"Accesos=\'herramientas\'; dis = \'btn-danger\' \" ng-class=\"\">Herramientas</a>\r\n				<a href=\"#\" class=\"btn   btn-default btn-xs\" ng-click=\"Accesos=\'destacados\';dis = \'btn-danger\' \"    ng-class=\"\">Destacados</a>\r\n				<a href=\"#\" class=\"btn   btn-default btn-xs\" ng-click=\"Accesos=\'interesantes\';dis = \'btn-danger\' \"  ng-class=\"\">Interesante</a>\r\n				</div>\r\n				</div>\r\n\r\n				<div class=\"acceso-fondo animar-accesos\" >\r\n				   <div class=\"row animar-accesos\" ng-switch=\"Accesos\">\r\n				     <div class=\"animar-accesos\" ng-switch-when=\"herramientas\">\r\n				     	\r\n				    \r\n					<div class=\"col-md-3\"><a href=\"http://docentes.tictucuman.net/login.php\" target=\"_blank\"><img src=\"images/Panel-Docente.png\" alt=\"\" class=\"img-responsive\"></a></div>\r\n					<div class=\"col-md-3\"><a href=\"http://www.formaciondeformadores.net/moodle/\" target=\"_blank\"><img src=\"images/plataforma.png\" alt=\"\" class=\"img-responsive\"></a></div>\r\n					<div class=\"col-md-3\"><a href=\"http://director.tictucuman.net/\" target=\"_blank\"><img src=\"images/Panel-Docente.png\" alt=\"\" class=\"img-responsive\"></a></div>\r\n					\r\n					<div class=\"col-md-3\"><a href=\"http://est.tictucuman.net/\" target=\"_blank\"><img src=\"images/estadisticas.png\" alt=\"\" class=\"img-responsive\"></a></div>\r\n 							</div>\r\n				\r\n					 <div class=\"animar-accesos\" ng-switch-when=\"destacados\">\r\n					<div class=\"col-md-3\"><a href=\"http://www.tictucuman.net/Pagina/editoriales.php\" target=\"_blank\"><img src=\"images/Editorial-exp.png\" alt=\"\" class=\"img-responsive\"></a></div>\r\n					<div class=\"col-md-3\"><a href=\"http://biblioteca.tictucuman.net/\" target=\"_blank\"><img src=\"images/biblioteca.png\" alt=\"\" class=\"img-responsive\"></a></div>\r\n					<div class=\"col-md-3\"><a href=\"http://conectandoescuelas.tictucuman.net/\" target=\"_blank\"><img src=\"images/conectando-escuelas.png\" alt=\"\" class=\"img-responsive\"></a></div>\r\n					\r\n					<div class=\"col-md-3\"><a href=\"http://www.bancos.tictucuman.net/\" target=\"_blank\"><img src=\"images/bancos.png\" alt=\"\" class=\"img-responsive\"></a></div>\r\n						</div>\r\n\r\n						<div class=\"animar-accesos\" ng-switch-when=\"interesantes\">\r\n						<div class=\"col-md-3\"><a href=\"\" target=\"_blank\"><img src=\"images/secundaria.png\" alt=\"\" class=\"img-responsive\"></a></div>\r\n					<div class=\"col-md-3\"><a href=\"\" target=\"_blank\"><img src=\"images/jovenes.png\" alt=\"\" class=\"img-responsive\"></a></div>\r\n					<div class=\"col-md-3\"><a href=\"\" target=\"_blank\"><img src=\"images/conectando-escuelas.png\" alt=\"\" class=\"img-responsive\"></a></div>\r\n					\r\n					<div class=\"col-md-3\"><a href=\"\" target=\"_blank\"><img src=\"images/bancos.png\" alt=\"\" class=\"img-responsive\"></a></div>\r\n							\r\n						</div>\r\n\r\n					</div>\r\n				</div>\r\n			</section>\r\n		</div>\r\n	</div>\r\n</div>  ");
$templateCache.put("views/agenda-detalle.tpl.html","");
$templateCache.put("views/agenda-hoy.tpl.html","<div class=\"cal-meses\" >\r\n        <span class=\"mdi-action-view-list\"></span>\r\n                       <select class=\"form-control \" id=\"select\" ng-controller=\"MesesCtrl\" ng-model=\"prop.value\" ng-options=\"v for v in prop.values\">\r\n  </select>\r\n        </div>\r\n        <div >\r\n        <div class=\"cal-ahora\" >\r\n       <time datetime=\"{{hoy[0].ag_fecha}}\" class=\"icon hidden-xs\">\r\n              <em>{{hoy[0].ag_fecha | date:\'EEEE\'}}</em>\r\n              <strong>{{hoy[0].ag_fecha | date:\'MMMM\'}}</strong>\r\n              <span>{{hoy[0].ag_fecha | date:\'d\'}}</span>\r\n          </time>\r\n\r\n\r\n         <div class=\"cal-evento\" >\r\n           <div class=\"cal-evento-linea\">{{hoy[0].ag_linea_accion }}</div>\r\n           <div class=\"cal-evento-tipo\">{{hoy[0].ag_tipo_visita }}</div>\r\n           <div class=\"cal-evento-hora\"><strong>comienza: </strong>{{hoy[0].ag_entrada }} - <strong>termina: </strong>{{hoy[0].ag_salida }}  </div>\r\n           <div class=\"cal-evento-sede\">{{hoy[0].Nombre }}</div>\r\n         </div>\r\n     \r\n     \r\n                   \r\n                 \r\n   \r\n       \r\n\r\n        </div>\r\n        <div class=\"cal-hoy\" >\r\n                    <div class=\"list-group\" ng-repeat=\"dia in hoy\">\r\n    <div class=\"list-group-item\" >\r\n        <div class=\"row-action-primary\">\r\n            <div class=\"cal-lista-dia verde\"><span class=\"fa fa-arrow-circle-right verde\"></span> {{dia.ag_entrada}}</div>\r\n            <div class=\"cal-lista-mes rojo\"><span class=\"fa fa-arrow-circle-left rojo\"></span> {{dia.ag_salida}}</div>\r\n        </div>\r\n        <div class=\"row-content\">\r\n            <div class=\"least-content badge-linea\">{{dia.ag_linea_accion }}</div>\r\n            <h4 class=\"list-group-item-heading bagde-tipo\">{{dia.ag_tipo_visita }}</h4>\r\n            <p class=\"list-group-item-text badge-sede\">{{dia.Nombre }}</p>\r\n        </div>\r\n    </div>\r\n      <div class=\"list-group-separator\"></div>\r\n   \r\n  \r\n</div>\r\n        </div>\r\n        </div>\r\n   <!--      <div class=\"cal-semana\"></div>\r\n        <h1>{{evento.Nombre}}</h1>\r\n      <ul class=\"panel callout radius\" ng-controller=\"CalListCtrl\">\r\n                <li ng-repeat=\"data in evento\">\r\n                    <p>Id: {{ data.ag_id }} Nombre: {{ data.Nombre }} </p>\r\n                </li>\r\n            </ul> -->");
$templateCache.put("views/agenda-lista.tpl.html","<div class=\"cal-meses\" >\r\n        <span class=\"mdi-action-view-list\"></span>\r\n                       <select class=\"form-control \" id=\"select\" ng-controller=\"MesesCtrl\" ng-model=\"prop.value\" ng-options=\"v for v in prop.values\">\r\n  </select>\r\n        </div>\r\n        <div >\r\n        <div class=\"cal-ahora\" >\r\n       <time datetime=\"{{hoy[0].ag_fecha}}\" class=\"icon hidden-xs\">\r\n              <em>{{hoy[0].ag_fecha | date:\'EEEE\'}}</em>\r\n              <strong>{{hoy[0].ag_fecha | date:\'MMMM\'}}</strong>\r\n              <span>{{hoy[0].ag_fecha | date:\'d\'}}</span>\r\n          </time>\r\n\r\n\r\n         <div class=\"cal-evento\" >\r\n           <div class=\"cal-evento-linea\">{{hoy[0].ag_linea_accion }}</div>\r\n           <div class=\"cal-evento-tipo\">{{hoy[0].ag_tipo_visita }}</div>\r\n           <div class=\"cal-evento-hora\"><strong>comienza: </strong>{{hoy[0].ag_entrada }} - <strong>termina: </strong>{{hoy[0].ag_salida }}  </div>\r\n           <div class=\"cal-evento-sede\">{{hoy[0].Nombre }}</div>\r\n         </div>\r\n     \r\n     \r\n                   \r\n                 \r\n   \r\n       \r\n\r\n        </div>\r\n        <div class=\"cal-hoy\" >\r\n                    <div class=\"list-group\" ng-repeat=\"dia in hoy\">\r\n    <div class=\"list-group-item\" >\r\n        <div class=\"row-action-primary\">\r\n            <div class=\"cal-lista-dia verde\"><span class=\"fa fa-arrow-circle-right verde\"></span> {{dia.ag_entrada}}</div>\r\n            <div class=\"cal-lista-mes rojo\"><span class=\"fa fa-arrow-circle-left rojo\"></span> {{dia.ag_salida}}</div>\r\n        </div>\r\n        <div class=\"row-content\">\r\n            <div class=\"least-content badge-linea\">{{dia.ag_linea_accion }}</div>\r\n            <h4 class=\"list-group-item-heading bagde-tipo\">{{dia.ag_tipo_visita }}</h4>\r\n            <p class=\"list-group-item-text badge-sede\">{{dia.Nombre }}</p>\r\n        </div>\r\n    </div>\r\n      <div class=\"list-group-separator\"></div>\r\n   \r\n  \r\n</div>\r\n        </div>\r\n        </div>\r\n   <!--      <div class=\"cal-semana\"></div>\r\n        <h1>{{evento.Nombre}}</h1>\r\n      <ul class=\"panel callout radius\" ng-controller=\"CalListCtrl\">\r\n                <li ng-repeat=\"data in evento\">\r\n                    <p>Id: {{ data.ag_id }} Nombre: {{ data.Nombre }} </p>\r\n                </li>\r\n            </ul> -->");
$templateCache.put("views/articulos-detalle.tpl.html"," \r\n <div class=\"container\">\r\n 	<div class=\"row\">\r\n 		<div class=\"col-md-12\" >\r\n 			<section class=\"shadow-z-3\">\r\n\r\n 			<div class=\"noticia-copete\">{{noticias.noticia[0].subtitulo}}</div>\r\n             <h1 class=\"noticia-titulo\">{{noticias.noticia[0].pg_title}}</h1>\r\n             <div class=\"noticia-datos\">\r\n             <div class=\"row\">\r\n             	<div class=\"col-md-4 col-md-offset-2 col-xs-6\" >\r\n             	 <span class=\"mdi-action-today\"></span>    {{noticias.noticia[0].Fecha | dateToISO | date:\'EEEE\' }} {{noticias.noticia[0].Fecha | dateToISO | date:\'d\' }} de {{noticias.noticia[0].Fecha | dateToISO | date:\'MMMM\' }} de {{noticias.noticia[0].Fecha | dateToISO | date:\'y\' }}\r\n             	</div>\r\n             	<div class=\"col-md-4 col-xs-6 pull-right\">\r\n             		<!-- <a href=\"#\" class=\"tag\">Front-end development</a> -->\r\n             	</div>\r\n             	</div> \r\n             </div>\r\n             <div class=\"row\">\r\n             	<div class=\"col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1\">\r\n             \r\n             		 <div class=\"noticia-cont\" ng-bind-html = \"noticias.noticia[0].pg_cont\">\r\n             		 \r\n             		 {{noticias.noticia[0].pg_cont}}\r\n                      \r\n\r\n             		 </div>\r\n             	</div>\r\n             </div>\r\n 			 			</section>\r\n 		</div>\r\n 	</div>\r\n </div>\r\n  <!-- <h1> {{noticias.noticia[0].Fecha}}</h1> -->");
$templateCache.put("views/articulos-lista.tpl.html","<div class=\"\" ><h3 class=\"padding10 text-titulo\">Ultimos articulos publicados</h3>  <center><a href=\"javascript:void(0)\" class=\"btn btn-xs btn-primary btn-raised\">Noticias</a>\r\n<a href=\"javascript:void(0)\" class=\"btn btn-xs btn-success btn-raised\">Capacitaciones</a>\r\n<a href=\"javascript:void(0)\" class=\"btn btn-xs btn-info btn-raised\">Experiencias</a></center></div>\r\n<hr>\r\n     \r\n     \r\n     <div  ng-repeat=\"articulos in articulo\" >\r\n     <div class=\"lista-articulo\">\r\n      <a href=\"#\" class=\"lista-link\">\r\n     <div class=\"row \">\r\n    \r\n       <div class=\"col-md-8 col-xs-12\">\r\n         <h4 class=\"text-titulo margin-left10\">{{articulos.pg_title}}</h4>\r\n          <h5 class=\"text-titulo  margin-left10\">{{articulos.subtitulo}}</h5>\r\n       </div>\r\n       <div class=\"col-md-4 hidden-xs\">\r\n          <img src=\"{{articulos.capa}}\" alt=\"{{articulos.pg_title}}\" class=\"img-responsive lista-img img-thumbnail\">\r\n\r\n       </div>\r\n              </div></a>\r\n\r\n     </div>\r\n\r\n\r\n</div>\r\n    ");
$templateCache.put("views/desarrollo.tpl.html","<h1>{{capacitaciones.comision.idComision}}</h1>\r\n<h1>{{capacitaciones.capacitacion[0].fk_capa}}</h1>\r\n\r\n\r\n<div class=\"container\">\r\n	<div class=\"row\">\r\n		<div class=\"col-md-12\">\r\n			<section class=\"shadow-z-3\">\r\n			 <div class=\"row\">\r\n				<div class=\"col-md-8\">\r\n        <main class=\"contenido\">\r\n        <h1>Contenido principal</h1>\r\n		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a erat id dui egestas placerat. Duis vulputate dignissim accumsan. Vestibulum pretium ut mi ac condimentum. Phasellus a viverra sem, non suscipit urna. Morbi non lectus consequat, tempor nunc non, rutrum massa. Sed pulvinar ipsum nec dignissim commodo. Maecenas vitae quam magna. Donec elementum mauris massa, et elementum quam convallis quis...</p>\r\n	</main>	\r\n	</div>	\r\n	<div class=\"col-md-4 sidebar\">\r\n		<aside class=\"sidebar\">\r\n		<h2>Sidebar</h2>\r\n		<p>Este sidebar llega hasta abajo aunque tenga poco contenido</p>\r\n	</aside>\r\n	</div>\r\n	</div>\r\n			</section>\r\n		</div>\r\n	</div>\r\n</div> ");
$templateCache.put("views/exp-lista.tpl.html","<div class=\"container\">\r\n	<div class=\"row\">\r\n		<div class=\"col-md-12\">\r\n			<section class=\"fondo-exp \">\r\n			     <div class=\"row\">\r\n			     	<div class=\"col-md-3\"><a href=\"http://experiencias.tictucuman.net/\" target=\"_blank\"><img src=\"images/logo-exp-home.png\" alt=\"\" class=\"img-responsive margin-top-15\"></a></div>\r\n				<div class=\"col-md-3\" ng-repeat=\"exp in experiencia\">\r\n					<div class=\"shadow-z-3 exp-articulo padding10\"> \r\n						<a href=\"#\">\r\n						<img src=\"{{exp.img_url}}\" alt=\"\" class=\"img-responsive\"> \r\n						<button class=\"btn btn-warning btn-fab-mini btn-raised mdi-content-add \"></button>\r\n						<p>{{exp.subtitulo}}</p>\r\n						</a>\r\n					</div>\r\n				</div>\r\n			     </div>\r\n				\r\n			</section>\r\n		\r\n		</div>\r\n			\r\n	</div>\r\n</div>");
$templateCache.put("views/footer.tpl.html","<div class=\"fondo-gris\">\r\n	<div class=\"container\">\r\n		<div class=\"row\"> \r\n			<div class=\"col-md-6\"><h2 class=\"h2-pie\">COORDINACIÓN PROVINCIAL TIC <br><small>Ministerio de Educación - Provincia de Tucumán</small></h2>\r\n\r\n			<ul class=\"list-unstyled list-pie\">\r\n			  <li><span class=\"mdi-action-home\"></span> 25 de Mayo 618, Tucumán (4000)</li>\r\n			  <li><span class=\"mdi-communication-phone\"></span> (0381)-4979196</li>\r\n			  <li><span class=\"mdi-communication-email\"></span> coordinaciontictucuman@gmail.com</li>\r\n\r\n			</ul>\r\n\r\n			<a href=\"#\" class=\"btn btn-warning btn-lg btn-raised\">SUSCRIBIRSE</a>\r\n			<a href=\"#\" class=\"btn btn-warning  btn-lg btn-raised\">CONTACTO</a>\r\n			</div>\r\n			<div class=\"col-md-6 \">\r\n			<div class=\"hex-row hexa-center\">\r\n\r\n        <div class=\"hex\">\r\n        <a href=\"\">\r\n        <div class=\"top\"></div>\r\n        <div class=\"middle\"><span class=\"icon-admin icon\"></span><p>ÁREA <br> Administrativa</p></div>\r\n        <div class=\"bottom\"></div>\r\n        </a>\r\n        </div>\r\n        <div class=\"hex\">\r\n        <a href=\"\">\r\n        <div class=\"top\"></div>\r\n        <div class=\"middle\"><span class=\"icon-rrhh icon\"></span><p>Recursos <br> Humanos</p></div>\r\n        <div class=\"bottom\"></div>\r\n        </a>\r\n        </div>\r\n    </div>\r\n  <div class=\"hex-row\">\r\n     <div class=\"hex\">\r\n        <a href=\"\">\r\n        <div class=\"top\"></div>\r\n        <div class=\"middle\"><span class=\"icon-tp icon\"></span><p>ÁREA <br> TÉcnico-Pedadógica</p></div>\r\n        <div class=\"bottom\"></div>\r\n        </a>\r\n        </div>\r\n            <div class=\"hex\">\r\n        <a href=\"\">\r\n        <div class=\"top\"></div>\r\n        <div class=\"middle\"><span class=\"icon-aed icon\"></span><p>EDucación A <br> Distancia</p></div>\r\n        <div class=\"bottom\"></div>\r\n        </a>\r\n        </div>\r\n            <div class=\"hex\">\r\n        <a href=\"\">\r\n        <div class=\"top\"></div>\r\n        <div class=\"middle\"><span class=\"icon-tic icon\"></span><p>Sistema <br> Multimedia</p></div>\r\n        <div class=\"bottom\"></div>\r\n        </a>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"hex-row hexa-left\">\r\n     \r\n        <div class=\"hex\">\r\n        <a href=\"\">\r\n        <div class=\"top\"></div>\r\n        <div class=\"middle\"><span class=\"icon-tecnico icon\"></span><p>área  <br> técnica</p></div>\r\n        <div class=\"bottom\"></div>\r\n        </a>\r\n        </div>\r\n        <div class=\"hex\">\r\n        <a href=\"\">\r\n        <div class=\"top\"></div>\r\n        <div class=\"middle\"><span class=\"icon-cin icon\"></span><p>Comunicación  <br> Institucional</p></div>\r\n        <div class=\"bottom\"></div>\r\n        </a>\r\n        </div>\r\n    </div>\r\n\r\n			</div>\r\n\r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("views/novedades.tpl.html","<div class=\"container\">\r\n  <div class=\"row\">\r\n       \r\n    <hr>\r\n    <div id=\"pinBoot\" class=\"col-md-4\" ng-repeat=\"item in items\"> \r\n\r\n      <article class=\"shadow-z-3\" ><img src=\"{{item.img_url}}\" alt=\"\" class=\"img-responsive\">\r\n        <h4><a href=\"#\">{{item.Titulo}}</a></h4>\r\n        <p>{{item.Resumen}}</p>\r\n      </article>\r\n\r\n      \r\n\r\n    </div>\r\n    <div id=\"pinBoot\" class=\"col-md-4\" ng-repeat=\"item in items\"> \r\n\r\n      <article class=\"shadow-z-3\" ><img src=\"{{item.img_url}}\" alt=\"\" class=\"img-responsive\">\r\n        <h4><a href=\"#\">{{item.Titulo}}</a></h4>\r\n        <p>{{item.Resumen}}</p>\r\n      </article>\r\n\r\n      \r\n\r\n    </div>\r\n\r\n\r\n    <hr>\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>");
$templateCache.put("views/post-detail.tpl.html","<article class=\"blog-post\">\n  <header class=\"blog-post-header\">\n    <h1>{{ postdetail.post.title }}</h1>\n  </header>\n  <p class=\"blog-post-body\">\n    {{ postdetail.post.body }}\n  </p>\n  <p>\n    Escrito por: <strong>{{ postdetail.user[0].name }}</strong>\n      <span class=\"fa fa-envelope\"></span> {{ postdetail.user[0].email }}\n  </p>\n</article>\n<hr>\n<aside class=\"comments\">\n  <header class=\"comments-header\">\n    <h3><span class=\"fa fa-comments\"></span> Comments</h3>\n  </header>\n  <ul class=\"comments-list\">\n    <li class=\"comment-item\" ng-repeat=\"comment in postdetail.comments\">\n      <span class=\"fa fa-user\"></span> <span class=\"comment-author\">{{ comment.email }}</span>\n      <p class=\"comment-body\">\n        {{ comment.body }}\n      </p>\n    </li>\n  </ul>\n</aside>\n");
$templateCache.put("views/post-list.tpl.html","<ul class=\"blog-post-list\">\r\n <li class=\"blog-post-link\" ng-repeat=\"post in postlist.posts\">\r\n <a ng-href=\"/post/{{ post.id }}\">{{ post.title }}</a>\r\n </li>\r\n </ul>");
$templateCache.put("views/recurso-lista.tpl.html","<div class=\"container\">\r\n	<div class=\"row\">\r\n		<div class=\"col-md-12\">\r\n			<section class=\"fondo-banco \">\r\n			     <div class=\"row\">\r\n			     	<div class=\"col-md-3\"><a href=\"http://recursos.tictucuman.net/\" target=\"_blank\"><img src=\"images/logo-banco-home.png\" alt=\"\" class=\"img-responsive margin-top-15\"></a></div>\r\n				<div class=\"col-md-3\" ng-repeat=\"banco in bancos\">\r\n					<div class=\"shadow-z-3 banco-articulo padding10\"> \r\n						<a href=\"#\">\r\n						<img src=\"{{banco.imagen}}\" alt=\"\" class=\"img-responsive\"> \r\n						<button class=\"btn btn-warning btn-fab-mini btn-raised mdi-content-add \"></button>\r\n						<p>{{banco.Nombre}}</p>\r\n						</a>\r\n					</div>\r\n				</div>\r\n			     </div>\r\n				\r\n			</section>\r\n		\r\n		</div>\r\n			\r\n	</div>\r\n</div>");
$templateCache.put("views/slide-lineas.tpl.html","<div class=\"container\">\r\n<section class=\"shadow-z-3\">\r\n    <div class=\"row\">\r\n       <div class=\"col-md-12\"><div class=\"lineas-titulo\">Lineas de Acción</div></div>\r\n        <div class=\"col-md-2\" ng-repeat=\"imagen in slineas\">\r\n            <div style=\"padding:10px\">\r\n                <a href=\"{{imagen.url_carpeta}}\" target=\"_blanñ\"><img src=\"{{imagen.boton_linea}}\" alt=\"\" class=\"img-responsive img-thumbnail\"></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n    \r\n</div>");
$templateCache.put("views/slide-lista.tpl.html","<div class=\"container \" >\r\n\r\n  <div class=\"row \">\r\n   <div class=\"col-md-12 col-xs-12 col-sm-12\" >\r\n   <section class=\"shadow-z-3\"  >\r\n   	 <carousel interval=\"3000\">\r\n      <slide class=\"slide\" ng-repeat=\"slide in slidelista.slides\" >\r\n<div class=\"caja-slide\">\r\n <img src=\"{{ slide.capa }}\" alt=\"\" class=\"img-responsive hidden-xs \">\r\n \r\n <div>\r\n <h4>{{ slide.pg_title }}</h4>\r\n <div ng-bind-html =\" slide.pg_des \"> {{ slide.pg_des }}</div>\r\n <a ng-href=\"articulo/{{ slide.pg_id }}\" class=\"btn btn-warning btn-sm btn-raised\">Leer más</a>\r\n </div>\r\n\r\n</div>\r\n\r\n        \r\n      </slide>\r\n    </carousel>\r\n   </section> \r\n  </div>\r\n  </div>\r\n</div>\r\n <div ng-controller=\"AccesosCtrl\" ng-include=\"template.accesos\" ></div>\r\n <div ng-controller=\"SlideLineasCtrl\" ng-include=\"template.slideLineas\" ></div>\r\n <div class=\"container\">\r\n   <div class=\"row\">\r\n     <div class=\"col-md-6 col-sm-6\"> \r\n       <section class=\"shadow-z-3 s90\" ng-controller=\"CalHoyCtrl\" ng-include=\"template.calendario\"></ng-include> ></section>\r\n       <div class=\"btn-center-in\">\r\n         <a href=\"#\" class=\"btn btn-warning btn-fab btn-raised mdi-content-add \"></a>\r\n       </div>\r\n     </div>\r\n     <div class=\"col-md-6 col-sm-6\">\r\n       <section class=\"shadow-z-3 s90\" ng-controller=\"ArtListCtrl\" ng-include=\"template.articulos\"></section>\r\n       <div class=\"btn-center-in\">\r\n         <a href=\"#\" class=\"btn btn-warning btn-fab btn-raised mdi-content-add \"></a>\r\n       </div>\r\n     </div>\r\n    \r\n   </div>\r\n </div>\r\n </div>\r\n<div ng-controller=\"ExpListCtrl\" ng-include=\"template.experiencias\" ></div>\r\n<div ng-controller=\"BancosListCtrl\" ng-include=\"template.bancos\" ></div>\r\n<!-- <div ng-controller=\"RecListCtrl\" ng-include=\"template.recursos\" ></div> -->\r\n ");}]);