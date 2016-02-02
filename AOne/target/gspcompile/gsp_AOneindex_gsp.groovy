import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_AOneindex_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/index.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)
createTagBody(1, {->
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',4,['gsp_sm_xmlClosingForEmptyTag':(""),'charset':("utf-8")],-1)
printHtmlPart(1)
createTagBody(2, {->
invokeTag('captureTitle','sitemesh',5,[:],-1)
})
invokeTag('wrapTitleTag','sitemesh',5,[:],2)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',6,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("description"),'content':("")],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',7,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("viewport"),'content':("width=device-width")],-1)
printHtmlPart(2)
invokeTag('stylesheet','asset',18,['src':("main.css")],-1)
printHtmlPart(3)
})
invokeTag('captureHead','sitemesh',20,[:],1)
printHtmlPart(1)
createTagBody(1, {->
printHtmlPart(4)
invokeTag('javascript','asset',52,['src':("lib/moment.min.js")],-1)
printHtmlPart(5)
invokeTag('javascript','asset',67,['src':("app.js")],-1)
printHtmlPart(6)
invokeTag('javascript','asset',69,['src':("controllers/nav.js")],-1)
printHtmlPart(7)
invokeTag('javascript','asset',70,['src':("controllers/item.js")],-1)
printHtmlPart(7)
invokeTag('javascript','asset',71,['src':("controllers/auth.js")],-1)
printHtmlPart(7)
invokeTag('javascript','asset',72,['src':("controllers/browse.js")],-1)
printHtmlPart(6)
invokeTag('javascript','asset',74,['src':("services/auth.js")],-1)
printHtmlPart(7)
invokeTag('javascript','asset',75,['src':("services/item.js")],-1)
printHtmlPart(7)
invokeTag('javascript','asset',76,['src':("services/comment.js")],-1)
printHtmlPart(7)
invokeTag('javascript','asset',77,['src':("services/offer.js")],-1)
printHtmlPart(3)
})
invokeTag('captureBody','sitemesh',79,['ng-app':("aOne")],1)
printHtmlPart(8)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1454431714972L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
