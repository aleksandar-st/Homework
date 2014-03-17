<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" version="1.0" encoding="UTF-8"/>
    <xsl:template name="supplement_list">
        <xsl:for-each select="/shop/supplements/supplement">
            <h3><xsl:value-of select="name"/></h3>
            <div>
                 <img src="images/{image}" />
                <p class="info">производител: <xsl:value-of select="brand"/></p>
                <p class="description-info">
                    <xsl:value-of select="description"/>			
                </p>
                <p class="price-info">
                    Цена: <xsl:value-of select="price"/> лв.
                </p>
                <button>Купи</button>
            </div>
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
                        <h1 >Магазин за хранителни добавки</h1>	
                    </header>
                    <section id="section">
                        <div id="main">
                            <xsl:call-template name="supplement_list"></xsl:call-template>
                        </div>
                    </section>               
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
