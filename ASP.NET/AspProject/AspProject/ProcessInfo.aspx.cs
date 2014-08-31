using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Data.SqlClient;
using System.Configuration;
using System.Xml.Linq;
using System.Xml;        
using System.Xml.Schema; 

namespace AspProject
{
    public partial class ProcessInfo : System.Web.UI.Page
    {
        private static bool isValid = true;
        private int filesNumber = 0;
        private SportShopEntities context = new SportShopEntities();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                string[] files = Directory.GetFiles(Server.MapPath("~/App_Data"), "*.xml", SearchOption.AllDirectories);
                foreach (string file in files)
                {
                    filesNumber++;
                    try
                    {
                        isValid = true;
                        XDocument xDoc = XDocument.Load(file);

                        XmlTextReader r = new XmlTextReader(file);
                        XmlValidatingReader val = new XmlValidatingReader(r);

                        val.ValidationType = ValidationType.DTD;
                        val.ValidationEventHandler += new ValidationEventHandler(MyValidationEventHandler);

                        while (val.Read())
                        {
                            // Can add code here to process the content.
                        }
                        val.Close();

                        if (isValid)
                        {
                            List<shop_info> sInfo = xDoc.Descendants("shop_info").Select(d =>
                            new shop_info
                            {
                                shop_id = d.Attribute("shop_id").Value,
                                shop_name = d.Element("shop_name").Value,
                                country = d.Element("country").Value,
                                city = d.Element("city").Value,
                                address = d.Element("address").Value,
                                phone = d.Element("phone").Value,
                                email = d.Element("email").Value,
                                site = d.Element("site").Value
                            }).ToList();
                            // Update Data Here
                            using (SportShopEntities dc = new SportShopEntities())
                            {
                                foreach (var i in sInfo)
                                {
                                    var v = dc.shop_info.Where(a => a.shop_id.Equals(i.shop_id)).FirstOrDefault();
                                    if (v != null)
                                    {
                                        v.shop_name = i.shop_name;
                                        v.country = i.country;
                                        v.city = i.city;
                                        v.address = i.address;
                                        v.phone = i.phone;
                                        v.email = i.email;
                                        v.site = i.site;
                                    }
                                    else
                                    {
                                        dc.shop_info.Add(i);
                                    }
                                }

                                dc.SaveChanges();
                            }

                            List<supplement> supp = xDoc.Descendants("supplement").Select(d =>
                            new supplement
                            {
                                supplement_id = int.Parse(d.Attribute("supplement_id").Value),
                                type = d.Attribute("type").Value,
                                purpose = d.Attribute("purpose").Value,
                                supplement_brand = d.Attribute("supplement_brand").Value,
                                available_in_shop = d.Attribute("available_in_shop").Value,
                                supplement_name = d.Element("supplement_name").Value,
                                supplement_price = Decimal.Parse(d.Element("supplement_price").Value.Replace('.', ',')),
                                //currency = supplement_price.d.Attribute("currency").Value, 
                                currency = "лев",
                                supplement_rating = int.Parse(d.Element("supplement_rating").Value),
                                packing = Decimal.Parse(d.Element("packing").Value.Replace('.', ',')),
                                taste = d.Element("taste").Value,
                                //measurement_unit = d.Attribute("measurement_unit").Value,
                                measurement_unit = "кг",                                
                                //servings = int.Parse(d.Element("servings").Value)
                            }).ToList();

                            // Update Data Here
                            using (SportShopEntities dc = new SportShopEntities())
                            {
                                foreach (var i in supp)
                                {
                                    var v = dc.supplement.Where(a => a.supplement_id.Equals(i.supplement_id)).FirstOrDefault();
                                    if (v != null)
                                    {
                                        v.type = i.type;
                                        v.purpose = i.purpose;
                                        v.supplement_brand = i.supplement_brand;
                                        v.available_in_shop = i.available_in_shop;
                                        v.supplement_name = i.supplement_name;
                                        v.supplement_price = i.supplement_price;
                                        v.currency = i.currency;
                                        v.supplement_rating = i.supplement_rating;
                                        v.packing = i.packing;
                                        v.taste = i.taste;
                                        v.measurement_unit = i.measurement_unit;
                                        v.servings = i.servings;
                                    }
                                    else
                                    {
                                        dc.supplement.Add(i);
                                    }
                                }

                                dc.SaveChanges();
                            }

                            List<boxing_gloves> bGloves = xDoc.Descendants("boxing_gloves").Select(d =>
                            new boxing_gloves
                            {
                                boxing_gloves_id = int.Parse(d.Attribute("boxing_gloves_id").Value),
                                available_in_shop = d.Attribute("available_in_shop").Value,
                                boxing_gloves_model = d.Element("boxing_gloves_model").Value,
                                boxing_gloves_price = Decimal.Parse(d.Element("boxing_gloves_price").Value.Replace('.', ',')),
                                //currency = boxing_gloves_price.d.Attribute("currency").Value,
                                currency="лев",
                                boxing_gloves_size = d.Element("boxing_gloves_size").Value,
                                boxing_gloves_rating = int.Parse(d.Element("boxing_gloves_rating").Value),
                                boxing_gloves_material = d.Element("boxing_gloves_material").Value,
                                origin = d.Element("origin").Value
                            }).ToList();

                            // Update Data Here
                            using (SportShopEntities dc = new SportShopEntities())
                            {
                                foreach (var i in bGloves)
                                {
                                    var v = dc.boxing_gloves.Where(a => a.boxing_gloves_id.Equals(i.boxing_gloves_id)).FirstOrDefault();
                                    if (v != null)
                                    {
                                        v.available_in_shop = i.available_in_shop;
                                        v.boxing_gloves_model = i.boxing_gloves_model;
                                        v.boxing_gloves_price = i.boxing_gloves_price;
                                        v.currency = i.currency;
                                        v.boxing_gloves_size = i.boxing_gloves_size;
                                        v.boxing_gloves_rating = i.boxing_gloves_rating;
                                        v.boxing_gloves_material = i.boxing_gloves_material;
                                        v.origin = i.origin;
                                    }
                                    else
                                    {
                                        dc.boxing_gloves.Add(i);
                                    }
                                }

                                dc.SaveChanges();
                            }

                            List<sport_shoes> spShoes = xDoc.Descendants("sport_shoes").Select(d =>
                            new sport_shoes
                            {
                                sport_shoes_id = int.Parse(d.Attribute("sport_shoes_id").Value),
                                available_in_shop = d.Attribute("available_in_shop").Value,
                                shoes_model = d.Element("shoes_model").Value,
                                shoes_price = Decimal.Parse(d.Element("shoes_price").Value.Replace('.', ',')),
                                //currency = boxing_gloves_price.d.Attribute("currency").Value,
                                currency = "лев",
                                shoes_size = int.Parse(d.Element("shoes_size").Value),
                                shoes_color = d.Element("shoes_color").Value,
                                shoes_brand = d.Element("shoes_brand").Value,
                            }).ToList();

                            // Update Data Here
                            using (SportShopEntities dc = new SportShopEntities())
                            {
                                foreach (var i in spShoes)
                                {
                                    var v = dc.sport_shoes.Where(a => a.sport_shoes_id.Equals(i.sport_shoes_id)).FirstOrDefault();
                                    if (v != null)
                                    {
                                        v.available_in_shop = i.available_in_shop;
                                        v.shoes_model = i.shoes_model;
                                        v.shoes_price = i.shoes_price;
                                        v.currency = i.currency;
                                        v.shoes_size = i.shoes_size;
                                        v.shoes_color = i.shoes_color;
                                        v.shoes_brand = i.shoes_brand;
                                    }
                                    else
                                    {
                                        dc.sport_shoes.Add(i);
                                    }
                                }

                                dc.SaveChanges();
                            }
                            if (filesNumber < 10)
                            {
                                lblSuccessMessage.Text = lblSuccessMessage.Text + "sport_shop-0" + filesNumber + " е валиден спрямо sport_shop.dtd и успешно е записан в базата данни <br />";
                            }
                            else {
                                lblSuccessMessage.Text = lblSuccessMessage.Text + "sport_shop-" + filesNumber + " е валиден спрямо sport_shop.dtd и успешно е записан в базата данни <br />";
                            }
                            
                        }
                        else
                        {
                            if (filesNumber < 10)
                            {
                                lblErrorMessage.Text = lblErrorMessage.Text + "sport_shop-0" + filesNumber + " не е валиден спрямо sport_shop.dtd и не е записан в базата данни <br />";
                            }
                            else
                            {
                                lblErrorMessage.Text = lblErrorMessage.Text + "sport_shop-" + filesNumber + " не е валиден спрямо sport_shop.dtd и не е записан в базата данни <br />";
                            }                          
                        }
                    }
                    catch (Exception)
                    {
                        throw;
                    }
                }
            }
        }
        public static void MyValidationEventHandler(object sender, ValidationEventArgs args)
        {
            isValid = false;

        }
    }
}