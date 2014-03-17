<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template name="supplements_list">
        <xsl:for-each select="/shop/supplements/supplement">
            <h3>Име на хранителната добавка: <xsl:value-of select="name"/></h3>
            <ul>
                <xsl:variable name="types_list" select="@type"/>
                <xsl:for-each select="//types/type">
                    <xsl:variable name="code" select="@type_id"/>
                    <xsl:if test="contains($types_list, $code)">
                        <li>Тип: <xsl:value-of select="."/></li>
                    </xsl:if>   
                </xsl:for-each>
            </ul>
        </xsl:for-each>
    </xsl:template>
    
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="bg">
            <head>
                <title>Магазин за хранителни добавки</title>
                <meta http-equiv="content-type" content="application/html; charset=utf-8" />
                <link rel="stylesheet" href="images/style.css" type="text/css" />
            </head>
            <body>
                <div id="wrapper">
                    <header>				
                        <h1>Магазин за хранителни добавки</h1>	
                    </header>
                    <section id="section">
                        <div id="main">
                            <h2>Типове хранителни добавки</h2> 
                            <xsl:call-template name="supplements_list"></xsl:call-template>
                        </div>
                    </section>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>