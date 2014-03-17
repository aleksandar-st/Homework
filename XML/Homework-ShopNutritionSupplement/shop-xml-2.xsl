<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" encoding="UTF-8" indent='yes'/>
    <xsl:template match="/">
        <supplements>
            <xsl:for-each select="/shop/supplements/supplement">
                <supplement  name="{name}"  rating="{rating}">
                    <brand><xsl:value-of select="brand"/></brand>
                    <price><xsl:value-of select="price"/></price>
                    <purpose>
                        <xsl:variable name="purposes_list" select="@purpose"/>
                        <xsl:for-each select="//purposes/purpose">
                            <xsl:variable name="code" select="@international_code"/>
                            <xsl:if test="contains($purposes_list, $code)">
                                <xsl:value-of select="."/>, 
                            </xsl:if>   
                        </xsl:for-each>
                    </purpose>                   
                </supplement>
            </xsl:for-each>
        </supplements>
    </xsl:template>
</xsl:stylesheet>