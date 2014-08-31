<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/MasterPage.Master" CodeBehind="ProcessInfo.aspx.cs" Inherits="AspProject.ProcessInfo" %>

<asp:Content runat="server" ContentPlaceHolderID="head">

    <title>Обработка на XML файлове</title>

</asp:Content>

<asp:Content runat="server" ContentPlaceHolderID="body">
    <asp:LinkButton class="hLink" ID="LinkButton1" Text="Назад" runat="server" PostBackUrl="~/Default.aspx" CausesValidation="false" />
    <div id="ProcessInfoContainer">
         <asp:Label ID="lblSuccessMessage" class="SuccessMesage" runat="server"/>
         <asp:Label ID="lblErrorMessage" class="ErrorMessage" runat="server"/>
    </div>
    
</asp:Content>