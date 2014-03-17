<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 
    <xsl:output method="text" />
    <xsl:template match="/">     
        <xsl:for-each select="/shop/supplements/supplement">
            -
            Име: <xsl:value-of select="name"/>          
            Вкус: <xsl:value-of select="taste"/>
            Цена: <xsl:value-of select="price"/> лв.
            Рейтинг: <xsl:value-of select="rating"/>
            Производител: <xsl:value-of select="brand"/>
            Количество: <xsl:for-each select="packings"><xsl:value-of select="packing"/><xsl:value-of select="measurement_unit"/>;</xsl:for-each>          
        </xsl:for-each>
    </xsl:template>
   
</xsl:stylesheet>