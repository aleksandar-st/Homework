//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AspProject
{
    using System;
    using System.Collections.Generic;
    
    public partial class shop_info
    {
        public shop_info()
        {
            this.boxing_gloves = new HashSet<boxing_gloves>();
            this.sport_shoes = new HashSet<sport_shoes>();
            this.supplement = new HashSet<supplement>();
        }
    
        public string shop_id { get; set; }
        public string shop_name { get; set; }
        public string country { get; set; }
        public string city { get; set; }
        public string address { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string site { get; set; }
    
        public virtual ICollection<boxing_gloves> boxing_gloves { get; set; }
        public virtual ICollection<sport_shoes> sport_shoes { get; set; }
        public virtual ICollection<supplement> supplement { get; set; }
    }
}
