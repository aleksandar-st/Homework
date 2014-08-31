<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/MasterPage.Master" CodeBehind="Default.aspx.cs" Inherits="AspProject.Default" %>

<asp:Content runat="server" ContentPlaceHolderID="head">
    <title>ASP.NET</title>
</asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="body">
    <div>
        <ul>
            <li>
                <asp:Button runat="server" class="btn" ID="BtnXmlToDb" Text="Прехвърли XML файловете в БД" PostBackUrl="ProcessInfo.aspx" />
            </li>
            <li>
                <asp:HyperLink class="hLink" ID="HLinkInputData" NavigateUrl="UserInput.aspx" runat="server" Text="Въвеждане на данни" />
            </li>
        </ul>
    </div>
</asp:Content>
