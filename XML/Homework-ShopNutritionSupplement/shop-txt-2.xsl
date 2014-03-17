<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    
  <xsl:output method="text" />   
    <xsl:template match="/">       
      <xsl:for-each select="/shop/supplements/supplement">
       -
      Име: <xsl:value-of select="name"/>  
      Цена: <xsl:value-of select="price"/> лв.
      Производител: <xsl:value-of select="brand"/>
      Рейтинг: <xsl:value-of select="rating"/>
      Активни вещества: <xsl:for-each select="content/material"><xsl:value-of select="material_name"/> (<xsl:value-of select="value"/><xsl:value-of select="unit"/>); </xsl:for-each>
    </xsl:for-each>
  </xsl:template>
   
</xsl:stylesheet>