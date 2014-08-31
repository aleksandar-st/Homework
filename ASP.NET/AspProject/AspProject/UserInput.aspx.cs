using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;
using System.Xml;
using System.Text.RegularExpressions;

namespace AspProject
{
    public partial class UserInput : System.Web.UI.Page
    {

        protected void ValidateSportShopID(object source, ServerValidateEventArgs args)
        {
            string sportShopID = args.Value;
            SportShopEntities context = new SportShopEntities();
            var sportShopIDs =
                from sInfo in context.shop_info
                select sInfo.shop_id;
            if (!sportShopIDs.Any(sInfo => sInfo == sportShopID))
            {
                args.IsValid = true;
            }
            else
            {
                CustomValidatorInpSportShopID.ErrorMessage = "* Съществуващо ID";
                args.IsValid = false;
            }
        }

        protected void ValidateName(object source, ServerValidateEventArgs args)
        {
            string name = args.Value;
            if (Regex.IsMatch(name, @"[\./\\\+,;':""]")) args.IsValid = false;
            else args.IsValid = true;
        }

        protected void ValidateSupplementAvailableInShop(object source, ServerValidateEventArgs args)
        {
            string sportShopID = args.Value;
            SportShopEntities context = new SportShopEntities();
            var sportShopIDs =
                from sInfo in context.shop_info
                select sInfo.shop_id;
            if (!sportShopIDs.Any(sInfo => sInfo == sportShopID))
            {
                string supplementID = InpSupplementAvailableInShop.Text;
                if (supplementID == sportShopID)
                {
                    args.IsValid = true;

                }
                else {
                    CustomValidatorSupplementAvailableInShop.ErrorMessage = "*  Не съществува магазин с този номер";
                    args.IsValid = false;  
                }
                              
            }
            else
            {
                args.IsValid = true;
            }
        }

        protected void ValidateSupplementID(object source, ServerValidateEventArgs args)
        {
            string supplementID = args.Value;
            if (Regex.IsMatch(supplementID, @"^\w+\-?\w*$"))
            {
                SportShopEntities context = new SportShopEntities();
                var supplementIDs =
                    from bs in context.supplement
                    select bs.supplement_id;
                int intSupplementID = int.Parse(supplementID);
                if (!supplementIDs.Any(bs => bs == intSupplementID))
                    args.IsValid = true;
                else
                {
                    CustomValidatorSupplementID.ErrorMessage = "* Съществуващо ID";
                    args.IsValid = false;
                }
            }
            else
            {
                CustomValidatorSupplementID.ErrorMessage = "* Невалидно ID";
                args.IsValid = false;
            }

        }

        protected void ValidateBoxingGlovesAvailableInShop(object source, ServerValidateEventArgs args)
        {
            string sportShopID = args.Value;
            SportShopEntities context = new SportShopEntities();
            var sportShopIDs =
                from sInfo in context.shop_info
                select sInfo.shop_id;
            if (!sportShopIDs.Any(sInfo => sInfo == sportShopID))
            {
                string boxingGlovesID = InpBoxingGlovesAvailableInShop.Text;
                if (boxingGlovesID == sportShopID)
                {
                    args.IsValid = true;

                }
                else
                {
                    CustomValidatorBoxingGlovesAvailableInShop.ErrorMessage = "*  Не съществува магазин с този номер";
                    args.IsValid = false;
                }
            }
            else
            {
                args.IsValid = true;
            }
        }

        protected void ValidateBoxingGlovesID(object source, ServerValidateEventArgs args)
        {
            string boxingGlovesID = args.Value;
            if (Regex.IsMatch(boxingGlovesID, @"^\w+\-?\w*$"))
            {
                SportShopEntities context = new SportShopEntities();
                var boxingGlovesIDs =
                    from bs in context.supplement
                    select bs.supplement_id;
                int intboxingGlovesID = int.Parse(boxingGlovesID);
                if (!boxingGlovesIDs.Any(bs => bs == intboxingGlovesID))
                    args.IsValid = true;
                else
                {
                    CustomValidatorBoxingGlovesID.ErrorMessage = "* Съществуващо ID";
                    args.IsValid = false;
                }
            }
            else
            {
                CustomValidatorBoxingGlovesID.ErrorMessage = "* Невалидно ID";
                args.IsValid = false;
            }

        }

        protected void ValidateSportShoesAvailableInShop(object source, ServerValidateEventArgs args)
        {
            string sportShopID = args.Value;
            SportShopEntities context = new SportShopEntities();
            var sportShopIDs =
                from sInfo in context.shop_info
                select sInfo.shop_id;
            if (!sportShopIDs.Any(sInfo => sInfo == sportShopID))
            {
                string sportShoesID = InpSportShoesAvailableInShop.Text;
                if (sportShoesID == sportShopID)
                {
                    args.IsValid = true;

                }
                else
                {
                    CustomValidatorSportShoesAvailableInShop.ErrorMessage = "*  Не съществува магазин с този номер";
                    args.IsValid = false;
                }
                
            }
            else
            {
                args.IsValid = true;
            }
        }

        protected void ValidateSportShoesID(object source, ServerValidateEventArgs args)
        {
            string sportShoesID = args.Value;
            if (Regex.IsMatch(sportShoesID, @"^\w+\-?\w*$"))
            {
                SportShopEntities context = new SportShopEntities();
                var sportShoesIDs =
                    from bs in context.supplement
                    select bs.supplement_id;
                int intsportShoesID = int.Parse(sportShoesID);
                if (!sportShoesIDs.Any(bs => bs == intsportShoesID))
                    args.IsValid = true;
                else
                {
                    CustomValidatorSportShoesID.ErrorMessage = "* Съществуващо ID";
                    args.IsValid = false;
                }
            }
            else
            {
                CustomValidatorSportShoesID.ErrorMessage = "* Невалидно ID";
                args.IsValid = false;
            }

        }

        protected void BtnSubmit_Click(object sender, EventArgs e)
        {
            if (Page.IsValid)
            {
                XDocument doc = new XDocument(
                new XDeclaration("1.0", "utf-8", string.Empty),
                new XDocumentType("sport_shop", null, "sport_shop.dtd", null),
                new XElement("sport_shop",
                    new XElement("shop_info",
                        new XAttribute("shop_id", InpSportShopID.Text),
                        new XElement("shop_name", InpSportShopName.Text),
                        new XElement("country", InpCountry.Text),
                        new XElement("city", InpCity.Text),
                        new XElement("address", InpAddress.Text),
                        new XElement("phone", InpPhNumber.Text),
                        new XElement("email", InpEmail.Text),
                        new XElement("site", InpSite.Text)
                    ),
                    new XElement("supplements",
                        new XElement("supplement",
                           new XAttribute("supplement_id", InpSupplementID.Text),
                           new XAttribute("type", InpSupplementType.Text),
                           new XAttribute("purpose", InpSupplementPurpose.Text),
                           new XAttribute("supplement_brand", InpSupplementBrand.Text),
                           new XAttribute("available_in_shop", InpSupplementAvailableInShop.Text),
                           new XElement("supplement_name", InpSupplementName.Text),
                           new XElement("supplement_price", InpSupplementPrice.Text,
                               new XAttribute("currency", InpSupplementCurrency.Text)
                           ),
                           new XElement("supplement_rating", InpSupplementRating.Text),
                           new XElement("taste", InpTaste.Text),
                           new XElement("packing", InpPacking.Text,
                               new XAttribute("measurement_unit", InpMeasurementUnit.Text)
                           ),
                           new XElement("servings", InpServings.Text)
                        )
                    ),
                    new XElement("sport_accessories",
                        new XElement("boxing_gloves",
                           new XAttribute("boxing_gloves_id", InpBoxingGlovesID.Text),
                           new XAttribute("available_in_shop", InpBoxingGlovesAvailableInShop.Text),
                           new XElement("boxing_gloves_model", InpBoxingGlovesModel.Text),
                           new XElement("boxing_gloves_price", InpBoxingGlovesPrice.Text,
                               new XAttribute("currency", InpBoxingGlovesCurrency.Text)
                           ),
                           new XElement("boxing_gloves_size", InpBoxingGlovesSize.Text),
                           new XElement("boxing_gloves_rating", InpBoxingGlovesRating.Text),
                           new XElement("boxing_gloves_material", InpBoxingGlovesMaterial.Text),
                           new XElement("origin", InpOrigin.Text)
                        ),
                        new XElement("sport_shoes",
                           new XAttribute("sport_shoes_id", InpSportShoesID.Text),
                           new XAttribute("available_in_shop", InpSportShoesAvailableInShop.Text),
                           new XElement("shoes_model", InpShoesModel.Text),
                           new XElement("shoes_price", InpShoesPrice.Text,
                               new XAttribute("currency", InpShoesCurrency.Text)
                           ),
                           new XElement("shoes_size", InpShoesSize.Text),
                           new XElement("shoes_color", InpShoesColor.Text),
                           new XElement("shoes_brand", InpShoesBrand.Text)
                       )
                    )
                 )
             );

                SportShopEntities context = new SportShopEntities();
                shop_info sInfo = new shop_info();
                sInfo.shop_id = Request.Form["ctl00$body$InpSportShopID"];
                sInfo.shop_name = Request.Form["ctl00$body$InpSportShopName"];
                sInfo.country = Request.Form["ctl00$body$InpCountry"];
                sInfo.city = Request.Form["ctl00$body$InpCity"];
                sInfo.address = Request.Form["ctl00$body$InpAddress"];
                sInfo.phone = Request.Form["ctl00$body$InpPhNumber"];
                sInfo.email = Request.Form["ctl00$body$InpEmail"];
                sInfo.site = Request.Form["ctl00$body$InpSite"];
                context.shop_info.Add(sInfo);

                supplement sup = new supplement();
                sup.supplement_id = int.Parse(Request.Form["ctl00$body$InpSupplementID"]);
                sup.available_in_shop = Request.Form["ctl00$body$InpSupplementAvailableInShop"];
                sup.type = Request.Form["ctl00$body$InpSupplementType"];
                sup.purpose = Request.Form["ctl00$body$InpSupplementPurpose"];
                sup.supplement_brand = Request.Form["ctl00$body$InpSupplementBrand"];
                sup.supplement_name = Request.Form["ctl00$body$InpSupplementName"];
                sup.supplement_price = decimal.Parse(Request.Form["ctl00$body$InpSupplementPrice"]);
                sup.currency = Request.Form["ctl00$body$InpSupplementCurrency"];
                sup.supplement_rating = int.Parse(Request.Form["ctl00$body$InpSupplementRating"]);
                sup.taste = Request.Form["ctl00$body$InpTaste"];
                sup.packing = decimal.Parse(Request.Form["ctl00$body$InpPacking"]);
                sup.measurement_unit = Request.Form["ctl00$body$InpMeasurementUnit"];
                sup.servings = int.Parse(Request.Form["ctl00$body$InpServings"]);
                context.supplement.Add(sup);

                boxing_gloves bGloves = new boxing_gloves();
                bGloves.boxing_gloves_id = int.Parse(Request.Form["ctl00$body$InpBoxingGlovesID"]);
                bGloves.available_in_shop = Request.Form["ctl00$body$InpBoxingGlovesAvailableInShop"];
                bGloves.boxing_gloves_model = Request.Form["ctl00$body$InpBoxingGlovesModel"];
                bGloves.boxing_gloves_price = decimal.Parse(Request.Form["ctl00$body$InpBoxingGlovesPrice"]);
                bGloves.currency = Request.Form["ctl00$body$InpBoxingGlovesCurrency"];
                bGloves.boxing_gloves_size = Request.Form["ctl00$body$InpBoxingGlovesSize"];
                bGloves.boxing_gloves_rating = int.Parse(Request.Form["ctl00$body$InpBoxingGlovesRating"]);
                bGloves.boxing_gloves_material = Request.Form["ctl00$body$InpBoxingGlovesMaterial"];
                bGloves.origin = Request.Form["ctl00$body$InpOrigin"];
                context.boxing_gloves.Add(bGloves);

                sport_shoes sShoes = new sport_shoes();
                sShoes.sport_shoes_id = int.Parse(Request.Form["ctl00$body$InpSportShoesID"]);
                sShoes.available_in_shop = Request.Form["ctl00$body$InpSportShoesAvailableInShop"];
                sShoes.shoes_model = Request.Form["ctl00$body$InpShoesModel"];
                sShoes.shoes_price = decimal.Parse(Request.Form["ctl00$body$InpShoesPrice"]);
                sShoes.currency = Request.Form["ctl00$body$InpShoesCurrency"];
                sShoes.shoes_size = int.Parse(Request.Form["ctl00$body$InpShoesSize"]);
                sShoes.shoes_color = Request.Form["ctl00$body$InpShoesColor"];
                sShoes.shoes_brand = Request.Form["ctl00$body$InpShoesBrand"];
                context.sport_shoes.Add(sShoes);

                //creating XML
                doc.Save(@"D:\New folder\" + sInfo.shop_name + sInfo.shop_id + ".xml");

                //adding to DB
                context.SaveChanges();

                DivSuccess.Visible = true;
                DivForm.Visible = false;

            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {

        }
    }
}