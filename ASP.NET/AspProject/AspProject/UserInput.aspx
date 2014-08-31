<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/MasterPage.Master" CodeBehind="UserInput.aspx.cs" Inherits="AspProject.UserInput" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <title>Въвеждане на данни</title>
</asp:Content>

<asp:Content ContentPlaceHolderID="body" runat="server" >
<asp:LinkButton class="hLink" ID="LinkButton1" Text="Назад" runat="server" PostBackUrl="~/Default.aspx" CausesValidation="false" />
<div id="BodyContainer">
    <div runat="server" id="DivSuccess" visible="false">
        <p id="SuccessText" class="SuccessMesage">
            Операцията завърши успешно!
        </p>       
    </div>
    <asp:ScriptManager ID="ScriptManager1" runat="server" />
    <div runat="server" id="DivForm">
        <fieldset>
            <legend>Информация за магазина</legend>
            <table>
                <colgroup>
                    <col width="350px" />
                    <col />
                </colgroup>
                     <tr>
                        <td>
                            <asp:Label ID="lblSportShopId" runat="server" AssociatedControlID="InpSportShopID">Номар на магазина: (Напр. N2)*</asp:Label>
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSportShopID" />
                            <asp:RequiredFieldValidator ID="rfvSsID" ErrorMessage="* Задължително поле" ControlToValidate="InpSportShopID" ForeColor="Red" Display="Dynamic" runat="server" />
                            <asp:CustomValidator ID="CustomValidatorInpSportShopID" ControlToValidate="InpSportShopID" Display="Dynamic" ForeColor="Red" OnServerValidate="ValidateSportShopID" runat="server" />                                                    
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblSportShopName" runat="server" AssociatedControlID="InpSportShopName">Име на магазина: </asp:Label>
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSportShopName" />   
                            <asp:RequiredFieldValidator ID="rfvSsName" ErrorMessage="* Задължително поле" ControlToValidate="InpSportShopName" ForeColor="Red" Display="Dynamic" runat="server" />
                            <asp:CustomValidator ID="cvSsName" ErrorMessage="* Невалидни символи . / \ + , ; ' : &quot; " ControlToValidate="InpSportShopName" OnServerValidate="ValidateName" Display="Dynamic" ForeColor="Red" runat="server" />                  
                        </td>
                    </tr>
                   <tr>
                        <td>
                            <asp:Label ID="lblCountry" runat="server" AssociatedControlID="InpCountry">Страна: </asp:Label>
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpCountry" /> 
                            <asp:RequiredFieldValidator ID="rfvCountry" ErrorMessage="* Задължително поле" ControlToValidate="InpCountry"
                                ForeColor="Red" Display="Dynamic" runat="server" />                         
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblCity" runat="server" AssociatedControlID="InpCity">Град: </asp:Label>
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpCity" /> 
                            <asp:RequiredFieldValidator ID="rfvCity" ErrorMessage="* Задължително поле" ControlToValidate="InpCity"
                                ForeColor="Red" Display="Dynamic" runat="server" />                           
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblAddress" runat="server" AssociatedControlID="InpAddress">Адреса: </asp:Label>
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpAddress" />  
                            <asp:RequiredFieldValidator ID="rfvAddress" ErrorMessage="* Задължително поле" ControlToValidate="InpAddress"
                                ForeColor="Red" Display="Dynamic" runat="server" />                          
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblPhNumber" runat="server" AssociatedControlID="InpPhNumber">Телефонен номер: </asp:Label>
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpPhNumber" CssClass="InpPhNumber" /> 
                            <asp:RequiredFieldValidator ID="rfvPhNumber" ErrorMessage="* Задължително поле" ControlToValidate="InpPhNumber"
                                ForeColor="Red" Display="Dynamic" runat="server" />                           
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblEmail" runat="server" AssociatedControlID="InpEmail">Имейл: </asp:Label>
                        </td>
                        <td>
                           <asp:TextBox runat="server" ID="InpEmail" CssClass="InpEmail" />  
                            <asp:RequiredFieldValidator ID="rfvEmail" ErrorMessage="* Задължително поле" ControlToValidate="InpEmail"
                                ForeColor="Red" Display="Dynamic" runat="server" />                         
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblSite" runat="server" AssociatedControlID="InpSite">Сайт: </asp:Label>
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSite" /> 
                            <asp:RequiredFieldValidator ID="rfvSite" ErrorMessage="* Задължително поле" ControlToValidate="InpSite"
                                ForeColor="Red" Display="Dynamic" runat="server" />                          
                        </td>
                    </tr>
            </table>
        </fieldset>       
        <fieldset>
            <legend>Информация за хранителна добавка</legend>                
                <table>
                    <colgroup>
                        <col width="350px" />
                        <col />
                    </colgroup>
                    <tr>
                        <td>
                            <asp:Label ID="lblSupplementID" runat="server" AssociatedControlID="InpSupplementID">ИД на хранителна добавка: (Напр. 5)*</asp:Label>
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSupplementID" /> 
                            <asp:RequiredFieldValidator ID="rfvSupplementID" ErrorMessage="* Задължително поле" ControlToValidate="InpSupplementID"
                                ForeColor="Red" Display="Dynamic" runat="server" />  
                            <asp:CustomValidator ID="CustomValidatorSupplementID" ControlToValidate="InpSupplementID" Display="Dynamic" ForeColor="Red" OnServerValidate="ValidateSupplementID" runat="server" />                      
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblSupplementAvailableInShop" runat="server" AssociatedControlID="InpSupplementAvailableInShop">Налична в магазин номер: (Напр. N2)*</asp:Label>
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSupplementAvailableInShop" /> 
                            <asp:RequiredFieldValidator ID="rfvSupplementAvailableInShop" ErrorMessage="* Задължително поле" ControlToValidate="InpSupplementAvailableInShop"
                                ForeColor="Red" Display="Dynamic" runat="server" />  
                            <asp:CustomValidator ID="CustomValidatorSupplementAvailableInShop" ControlToValidate="InpSupplementAvailableInShop" Display="Dynamic" ForeColor="Red" OnServerValidate="ValidateSupplementAvailableInShop" runat="server" />                      
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblSupplementType" Text="Тип:" runat="server" AssociatedControlID="InpSupplementType" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSupplementType" MaxLength="255" />  
                            <asp:RequiredFieldValidator ID="rfvSupplementType" ErrorMessage="* Задължително поле" ControlToValidate="InpSupplementType"
                                ForeColor="Red" Display="Dynamic" runat="server" />        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblSupplementPurpose" Text="Намена: " runat="server" AssociatedControlID="InpSupplementPurpose" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSupplementPurpose" MaxLength="255" /> 
                            <asp:RequiredFieldValidator ID="rfvSupplementPurpose" ErrorMessage="* Задължително поле" ControlToValidate="InpSupplementPurpose"
                                ForeColor="Red" Display="Dynamic" runat="server" />           
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblSupplementBrand" Text="Марка: " runat="server" AssociatedControlID="InpSupplementBrand" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSupplementBrand" MaxLength="255" />  
                            <asp:RequiredFieldValidator ID="rfvSupplementBrand" ErrorMessage="* Задължително поле" ControlToValidate="InpSupplementBrand"
                                ForeColor="Red" Display="Dynamic" runat="server" />          
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblSupplementName" Text="Име: " runat="server" AssociatedControlID="InpSupplementName" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSupplementName" MaxLength="255" /> 
                            <asp:RequiredFieldValidator ID="rfvSupplementName" ErrorMessage="* Задължително поле" ControlToValidate="InpSupplementName"
                                ForeColor="Red" Display="Dynamic" runat="server" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblSupplementPrice" Text="Цена (Напр. 54,50): " runat="server" AssociatedControlID="InpSupplementPrice" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSupplementPrice" MaxLength="6" /> 
                            <asp:RequiredFieldValidator ID="rfvSupplementPrice" ErrorMessage="* Задължително поле" ControlToValidate="InpSupplementPrice"
                                ForeColor="Red" Display="Dynamic" runat="server" />          
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblSupplementCurrency" Text="Валута: " runat="server" AssociatedControlID="InpSupplementCurrency" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSupplementCurrency" MaxLength="255" />
                            <asp:RequiredFieldValidator ID="rfvSupplementCurrency" ErrorMessage="* Задължително поле" ControlToValidate="InpSupplementCurrency"
                                ForeColor="Red" Display="Dynamic" runat="server" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblSupplementRating" Text="Райтинг: " runat="server" AssociatedControlID="InpSupplementRating" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSupplementRating" MaxLength="10" />
                            <asp:RequiredFieldValidator ID="rfvSupplementRating" ErrorMessage="* Задължително поле" ControlToValidate="InpSupplementRating"
                                ForeColor="Red" Display="Dynamic" runat="server" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblTaste" Text="Вкус: " runat="server" AssociatedControlID="InpTaste" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpTaste" MaxLength="255" />
                            <asp:RequiredFieldValidator ID="rfvTaste" ErrorMessage="* Задължително поле" ControlToValidate="InpTaste"
                                ForeColor="Red" Display="Dynamic" runat="server" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblPacking" Text="Разфасовка (Напр. 2,245):" runat="server" AssociatedControlID="InpPacking" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpPacking" MaxLength="6" />
                            <asp:RequiredFieldValidator ID="rfvPacking" ErrorMessage="* Задължително поле" ControlToValidate="InpPacking"
                                ForeColor="Red" Display="Dynamic" runat="server" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblMeasurementUnit" Text="Мерна единица:" runat="server" AssociatedControlID="InpMeasurementUnit" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpMeasurementUnit" MaxLength="255" />
                            <asp:RequiredFieldValidator ID="rfvMeasurementUnit" ErrorMessage="* Задължително поле" ControlToValidate="InpMeasurementUnit"
                                ForeColor="Red" Display="Dynamic" runat="server" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblServings" Text="Дозировки:" runat="server" AssociatedControlID="InpServings" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpServings" MaxLength="100" />
                            <asp:RequiredFieldValidator ID="rfvServings" ErrorMessage="* Задължително поле" ControlToValidate="InpServings"
                                ForeColor="Red" Display="Dynamic" runat="server" />
                        </td>
                    </tr>
                </table>            
        </fieldset>  
        <fieldset>
            <legend>Информация за боксови ръкавици</legend>                
                <table>
                    <colgroup>
                        <col width="350px" />
                        <col />
                    </colgroup>
                    <tr>
                        <td>
                            <asp:Label ID="lblBoxingGlovesID" runat="server" AssociatedControlID="InpBoxingGlovesID">ИД на боксовите ръкавици: (Напр. 5)*</asp:Label>
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpBoxingGlovesID" />  
                            <asp:RequiredFieldValidator ID="rfvBoxingGlovesID" ErrorMessage="* Задължително поле" ControlToValidate="InpBoxingGlovesID"
                                ForeColor="Red" Display="Dynamic" runat="server" />   
                            <asp:CustomValidator ID="CustomValidatorBoxingGlovesID" ControlToValidate="InpBoxingGlovesID" Display="Dynamic" ForeColor="Red" OnServerValidate="ValidateBoxingGlovesID" runat="server" />                    
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblBoxingGlovesAvailableInShop" runat="server" AssociatedControlID="InpBoxingGlovesAvailableInShop">Налични в магазин номер: (Напр. N2)*</asp:Label>
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpBoxingGlovesAvailableInShop" />  
                            <asp:RequiredFieldValidator ID="rfvBoxingGlovesAvailableInShop" ErrorMessage="* Задължително поле" ControlToValidate="InpBoxingGlovesAvailableInShop"
                                ForeColor="Red" Display="Dynamic" runat="server" />
                            <asp:CustomValidator ID="CustomValidatorBoxingGlovesAvailableInShop" ControlToValidate="InpBoxingGlovesAvailableInShop" Display="Dynamic" ForeColor="Red" OnServerValidate="ValidateBoxingGlovesAvailableInShop" runat="server" />                       
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblBoxingGlovesModel" Text="Модел:" runat="server" AssociatedControlID="InpBoxingGlovesModel" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpBoxingGlovesModel" MaxLength="255" />  
                            <asp:RequiredFieldValidator ID="rfvBoxingGlovesModel" ErrorMessage="* Задължително поле" ControlToValidate="InpBoxingGlovesModel"
                                ForeColor="Red" Display="Dynamic" runat="server" />        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblBoxingGlovesPrice" Text="Цена (Напр. 54,50): " runat="server" AssociatedControlID="InpBoxingGlovesPrice" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpBoxingGlovesPrice" MaxLength="255" /> 
                            <asp:RequiredFieldValidator ID="rfvBoxingGlovesPrice" ErrorMessage="* Задължително поле" ControlToValidate="InpBoxingGlovesPrice"
                                ForeColor="Red" Display="Dynamic" runat="server" />           
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblBoxingGlovesCurrency" Text="Валута: " runat="server" AssociatedControlID="InpBoxingGlovesCurrency" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpBoxingGlovesCurrency" MaxLength="255" />
                            <asp:RequiredFieldValidator ID="rfvBoxingGlovesCurrency" ErrorMessage="* Задължително поле" ControlToValidate="InpBoxingGlovesCurrency"
                                ForeColor="Red" Display="Dynamic" runat="server" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblBoxingGlovesSize" Text="Размер (Напр. 12 OZ): " runat="server" AssociatedControlID="InpBoxingGlovesSize" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpBoxingGlovesSize" MaxLength="255" /> 
                            <asp:RequiredFieldValidator ID="rfvBoxingGlovesSize" ErrorMessage="* Задължително поле" ControlToValidate="InpBoxingGlovesSize"
                                ForeColor="Red" Display="Dynamic" runat="server" />           
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblBoxingGlovesRating" Text="Райтинг: " runat="server" AssociatedControlID="InpBoxingGlovesRating" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpBoxingGlovesRating" MaxLength="255" />
                            <asp:RequiredFieldValidator ID="rfvBoxingGlovesRating" ErrorMessage="* Задължително поле" ControlToValidate="InpBoxingGlovesRating"
                                ForeColor="Red" Display="Dynamic" runat="server" />           
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblBoxingGlovesMaterial" Text="Материал: " runat="server" AssociatedControlID="InpBoxingGlovesMaterial" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpBoxingGlovesMaterial" MaxLength="255" />
                            <asp:RequiredFieldValidator ID="rfvBoxingGlovesMaterial" ErrorMessage="* Задължително поле" ControlToValidate="InpBoxingGlovesMaterial"
                                ForeColor="Red" Display="Dynamic" runat="server" />           
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblOrigin" Text="Производител: " runat="server" AssociatedControlID="InpOrigin" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpOrigin" MaxLength="255" />
                            <asp:RequiredFieldValidator ID="rfvOrigin" ErrorMessage="* Задължително поле" ControlToValidate="InpOrigin"
                                ForeColor="Red" Display="Dynamic" runat="server" />
                        </td>
                    </tr>                   
                </table>            
        </fieldset>  
        <fieldset>
            <legend style="font-weight:bold; text-transform: uppercase">Информация за спортни обувки</legend>                
                <table>
                    <colgroup>
                        <col width="350px" />
                        <col />
                    </colgroup>
                    <tr>
                        <td>
                            <asp:Label ID="lblSportShoesID" runat="server" AssociatedControlID="InpSportShoesID">ИД на спортните обувки: (Напр. 5)*</asp:Label>
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSportShoesID" /> 
                            <asp:RequiredFieldValidator ID="rfvSportShoesID" ErrorMessage="* Задължително поле" ControlToValidate="InpSportShoesID"
                                ForeColor="Red" Display="Dynamic" runat="server" />   
                            <asp:CustomValidator ID="CustomValidatorSportShoesID" ControlToValidate="InpSportShoesID" Display="Dynamic" ForeColor="Red" OnServerValidate="ValidateSportShoesID" runat="server" />                     
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblSportShoesAvailableInShop" runat="server" AssociatedControlID="InpSportShoesAvailableInShop">Налични в магазин номер: (Напр. N2)*</asp:Label>
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpSportShoesAvailableInShop" />
                            <asp:RequiredFieldValidator ID="rfvSportShoesAvailableInShop" ErrorMessage="* Задължително поле" ControlToValidate="InpSportShoesAvailableInShop"
                                ForeColor="Red" Display="Dynamic" runat="server" />  
                            <asp:CustomValidator ID="CustomValidatorSportShoesAvailableInShop" ControlToValidate="InpSportShoesAvailableInShop" Display="Dynamic" ForeColor="Red" OnServerValidate="ValidateSportShoesAvailableInShop" runat="server" />                       
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblShoesModel" Text="Модел:" runat="server" AssociatedControlID="InpShoesModel" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpShoesModel" MaxLength="255" /> 
                            <asp:RequiredFieldValidator ID="rfvShoesModel" ErrorMessage="* Задължително поле" ControlToValidate="InpShoesModel"
                                ForeColor="Red" Display="Dynamic" runat="server" />         
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblShoesPrice" Text="Цена (Напр. 54,50): " runat="server" AssociatedControlID="InpShoesPrice" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpShoesPrice" MaxLength="255" /> 
                            <asp:RequiredFieldValidator ID="rfvShoesPrice" ErrorMessage="* Задължително поле" ControlToValidate="InpShoesPrice"
                                ForeColor="Red" Display="Dynamic" runat="server" />           
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblShoesCurrency" Text="Валута: " runat="server" AssociatedControlID="InpShoesCurrency" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpShoesCurrency" MaxLength="255" />
                            <asp:RequiredFieldValidator ID="rfvShoesCurrency" ErrorMessage="* Задължително поле" ControlToValidate="InpShoesCurrency"
                                ForeColor="Red" Display="Dynamic" runat="server" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblShoesSize" Text="Размер: " runat="server" AssociatedControlID="InpShoesSize" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpShoesSize" MaxLength="255" />
                            <asp:RequiredFieldValidator ID="rfvShoesSize" ErrorMessage="* Задължително поле" ControlToValidate="InpShoesSize"
                                ForeColor="Red" Display="Dynamic" runat="server" />            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblShoesColor" Text="Цвят: " runat="server" AssociatedControlID="InpShoesColor" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpShoesColor" MaxLength="255" /> 
                            <asp:RequiredFieldValidator ID="rfvShoesColor" ErrorMessage="* Задължително поле" ControlToValidate="InpShoesColor"
                                ForeColor="Red" Display="Dynamic" runat="server" />          
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblShoesBrand" Text="Производител: " runat="server" AssociatedControlID="InpShoesBrand" />
                        </td>
                        <td>
                            <asp:TextBox runat="server" ID="InpShoesBrand" MaxLength="255" />
                            <asp:RequiredFieldValidator ID="rfvShoesBrand" ErrorMessage="* Задължително поле" ControlToValidate="InpShoesBrand"
                                ForeColor="Red" Display="Dynamic" runat="server" />
                        </td>
                    </tr>                   
                </table>            
        </fieldset> 
        <div id="SubmitContainer">
            <asp:Button class="btn" ID="BtnSubmit" Text="Запиши" runat="server" OnClick="BtnSubmit_Click"/>
        </div>                             
    </div>
</div>
</asp:Content>

