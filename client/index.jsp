<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>首页</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/client/css/main.css" type="text/css" />
<!-- 导入首页轮播图css和js脚本 -->
<link type="text/css" href="${pageContext.request.contextPath}/client/css/autoplay.css" rel="stylesheet" />
<script type="text/javascript" src="${pageContext.request.contextPath}/client/js/autoplay.js"></script>
</head>
<body class="main">
<!-- 1.网上书城顶部 start -->
	  <%@include file="head.jsp" %>
<!-- 网上书城顶部  end -->

<!-- 2.网上书城菜单列表  start -->
	<%@include file="menu_search.jsp" %>
<!-- 网上书城菜单列表  end -->

<!-- 3.网上书城首页轮播图  start -->
	<div id="box_autoplay">
    	<div class="list">
        	<ul>
            	<li><img src="${pageContext.request.contextPath}/client/ad/index_ad1.jpg" width="900" height="335" /></li>
            	<li><img src="${pageContext.request.contextPath}/client/ad/index_ad2.jpg" width="900" height="335" /></li>
            	<li><img src="${pageContext.request.contextPath}/client/ad/index_ad3.jpg" width="900" height="335" /></li>
            	<li><img src="${pageContext.request.contextPath}/client/ad/index_ad4.jpg" width="900" height="335" /></li>
            	<li><img src="${pageContext.request.contextPath}/client/ad/index_ad5.jpg" width="900" height="335" /></li>
        	</ul>
    	</div>
	</div>
<!-- 网上书城首页轮播图  end -->
<!-- 4.公告板和本周热卖  start -->
   <!-- 图书商场首页轮播图  end -->	
	<div id="divcontent">
		<table width="900px" border="0" cellspacing="0">
			<tr>
				<td width="497">
					<img src="${pageContext.request.contextPath}/client/images/billboard.gif" width="497" height="38" />
					<table cellspacing="0" class="ctl">
						<tr>
							<td width="485" height="100%">${n.details }</td>
						</tr>
					</table>
				</td>
				<td style="padding:5px 15px 10px 40px">
					<table width="100%" border="0" cellspacing="0">
						<tr>
							<td>
								<img src="${pageContext.request.contextPath}/client/images/hottitle.gif" width="126" height="29" />
							</td>
						</tr>
					</table>
					<table width="100%" border="0" cellspacing="0">
						<tr>
						<c:forEach items="${pList}" var="pArray">
							<td style="width:80; text-align:center">
								<a href="${pageContext.request.contextPath}/findProductById?id=${pArray[0]}">
									<img src="${pageContext.request.contextPath }${pArray[2]}" width="102" height="130" border="0" /> 
								</a>
								<br/> 
								<a href="${pageContext.request.contextPath}/findProductById?id=${pArray[0]}">${pArray[1]}</a>
								<%-- <br />作者:${pArray[2] } --%>
							</td>
						</c:forEach>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</div>
<!-- 公告板和本周热卖  end -->		
<!--5. 网上书城底部 start -->
      <%@ include file="foot.jsp" %>
<!-- 网上书城底部  end -->
</body>
</html>