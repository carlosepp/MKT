<link rel="stylesheet" href="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/css/main.css">
<link rel="stylesheet" href="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/css/app.css">

<!--[if IE]>
 	<link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
<![endif]-->


<!-- jQuery -->
<script id="topNavItemTemplate" type="text/template">
	<a href="{{=linkUrl}}">{{=title}}</a>
</script>

<script id="LFBannerTemplate" type="text/template">
	<a href="{{=linkUrl}}"><img src="{{=imageUrl}}"/></a>
</script>
<script id="AccessMeBannerTemplate" type="text/template">
	<a href="{{=linkUrl}}"><img src="{{=imageUrl}}"/></a>
</script>

<script id="detailViewTemplate" type="text/template">
	<div class="news-internal-content {{=category}}">
		
		<div class="widget banner-header">			
			<div class="category {{=category}}">
				<span></span>
				Our {{=category}}
			</div>
			<div class="trama"></div>
			<img src="{{=categoryImageUrl}}">
		</div>
		 <div class="headline">
			<h1>
				{{=title}}
			</h1>
			<div>
                <span class="date">
                    <cite>{{=date}}<span>|</span> por {{=author}}</cite>
                </span>
                <span class="cat tags">
                    <label>Accenture Way:</label> <a class="tag link-{{=tag}}" href="#category/{{=tag}}">{{=tag}}</a>
                </span>
            </div>
		</div>
		{{if(videoId){ }}
			<div class="media-wrapper"><iframe width="100%" height="415" src="//www.youtube.com/embed/{{=videoId}}" frameborder="0" allowfullscreen></iframe></div>

		{{ } else{ }}
				{{if(imageUrl){ }}
					<div class="media-wrapper"><img src="{{=imageUrl}}" alt="{{=title}}"/></div>
				{{ } }}
		{{ } }}
		<div class="content-field">{{=content}}</div>

	</div>
</script>
<script id="relatedNewItemTemplate" type="text/template">
		
	<div class="{{if(imageUrl){ }}hasImage {{ } }} {{if(videoId){ }}hasVideo {{ } }}">
			
			{{if(videoId){ }}
				<div class="videoMask"><img src="https://img.youtube.com/vi/{{=videoId}}/0.jpg"/></div>
			{{ }else{  }}
	
				{{if(imageUrl){ }}
					<div class="imageMask"><img src="{{=imageUrl}}" class="list-image"/>	</div>
				{{ } }}
			{{ } }}
	
		<h4><a href="#{{=id}}">{{=title}}</a></h4>
		<p class="date">{{=date}}</p>
		<div class="tags"><a href="#" class="link-{{=tag}}">{{=tag}}</a></div>
		<a href="#{{=id}}" class="more"><i></i><span>Conoce m&aacute;s</span></a>
	</div>
</script>
<script id="expertItemTemplate" type="text/template">
	<img src="{{=imageUrl}}" alt="{{=name}}">                        
    <h4>
        {{=name}}
	    <cite>{{=position}}</cite>
    </h4>   
</script>

<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/vendor/json2.js"></script>
<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/vendor/jquery2.js"></script>

<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/vendor/underscore.js"></script>
<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/vendor/backbone.js"></script>


<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/vendor/backbone.sharepoint.soap.js"></script>
<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/vendor/backbone.filtered.collection.js"></script>
<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/vendor/backbone.sorting.js"></script>
<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/vendor/backbone.viewOptions.js"></script>
<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/vendor/cycle.js"></script>
<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/vendor/moment.js"></script>
<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/vendor/masonry.js"></script>
<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/_config.js"></script> 
<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/modules/TopNavigation.js"></script>  
<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/modules/News.js"></script>  
<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/common.js"></script>
<script   src="https://sites.accenture.com/publishing/Mexico/MKTDev/assets/js/detail.js"></script> 


<div id="overlay"></div>
<div class="videoModal"></div>

<div class="topNavigation"><ul id="topNav"></ul></div>

<div class="layout-news-detail">
	<div class="content" id="detailView">
		
	</div>
	<div class="sidebar">
		<div class="widget corner" id="LFBanner"></div>
		
		<div class="widget noticias-relacionadas">
			<h3>Noticias Relacionadas</h3>
			<ul id="Related"></ul>
		</div>
		<div class="widget expertos">
                <h3>Expertos en el Tema</h3>
                <ul class="experts"></ul>
                <div id="exp-nav" class="pager">
                	
                	<a href="#" id="prevExp">Prev</a>
                	<a href="#" id="nextExp">Next</a>
                </div>
        </div>
		<div class="widget expertos voluntarios" id="VolunteerExperts"></div>
		<div class="widget access-me" id="AccessMeBanner"></div>
		
	</div>
</div>