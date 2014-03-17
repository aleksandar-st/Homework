<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" encoding="UTF-8" indent='yes'/>
    <xsl:template match="/">
        <supplements>
            <xsl:for-each select="/shop/supplements/supplement">
                <supplement  name="{name}">
                    <rating> <xsl:value-of select="rating"/></rating>
                    <taste><xsl:value-of select="taste"/></taste>
                    <description><xsl:value-of select="description"/></description>
                    <type>
                        <xsl:variable name="types_list" select="@type"/>
                        <xsl:for-each select="//types/type">
                            <xsl:variable name="code" select="@type_id"/>
                            <xsl:if test="contains($types_list, $code)">
                                <xsl:value-of select="."/>
                            </xsl:if>   
                        </xsl:for-each>
                    </type>                   
                </supplement>
            </xsl:for-each>
        </supplements>
    </xsl:template>
</xsl:stylesheet>
