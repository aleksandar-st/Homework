var document = new ActiveXObject ( 'MSXML.DOMDocument' );

var xmlINstruction = document.createProcessingInstruction("xml" , "version = '1.0' encoding='UTF-8'");
document.appendChild(xmlINstruction);

var shop = document.createElement ( 'shop' );
document.appendChild(shop);

    var supplements = document.createElement ( 'supplements' );
    shop.appendChild(supplements);
    
        var supplement = document.createElement ( 'supplement' );
        supplements.appendChild(supplement);
        supplement.setAttribute ( 'id', 'HR01021324' );
        supplement.setAttribute ( 'type', 'P' );
        supplement.setAttribute ( 'purpose', 'P21' );

            var name = document.createElement ( 'name' );
            supplement.appendChild(name);
                var textName = document.createTextNode('Шок');
                name.appendChild(textName);

            var price = document.createElement ( 'price' );
            supplement.appendChild(price);
                var textPrice = document.createTextNode('83');
                price.appendChild(textPrice);

            var rating = document.createElement ( 'rating' );
            supplement.appendChild(rating);
                var textRating = document.createTextNode('5');
                rating.appendChild(textRating);

            var image = document.createElement ( 'image' );
            supplement.appendChild(image);
                var textImage = document.createTextNode('shock.jpg');
                image.appendChild(textImage);

            var quantity = document.createElement ( 'quantity' );
            supplement.appendChild(quantity); 
                var textQuantity = document.createTextNode('1');
                quantity.appendChild(textQuantity);

            var taste = document.createElement ( 'taste' );
            supplement.appendChild(taste);
                var textTaste = document.createTextNode('шоколад');
                taste.appendChild(textTaste);

            var content = document.createElement ( 'content' );
            supplement.appendChild(content);
            
                var material = document.createElement ( 'material' );
                content.appendChild(material);
                
                    var material_name = document.createElement ( 'material_name' );
                    material.appendChild(material_name);
                        var textMaterial = document.createTextNode('протеин');
                        material_name.appendChild(textMaterial);

                    var value = document.createElement ( 'value' );
                    material.appendChild(value);
                        var textValue = document.createTextNode('100');
                        value.appendChild(textValue);

                    var unit = document.createElement ( 'unit' );
                    material.appendChild(unit);
                        var textUnit = document.createTextNode('г');
                        unit.appendChild(textUnit);
                
            var description = document.createElement ( 'description' );
            supplement.appendChild(description);
                var textDescription = document.createTextNode('Ако искате да сте заредени и мотивирани във фитнеса, Шок е точно за вас. Тази формула ще сработи при някои много интензивни тренировки и ще ви помогне да натрупате маса. Тялото ви ще се чувства заредено през целия ден от кръвта, връхлитаща мускулната ви тъкан и доставяйки нутриентите, необходими за истински растеж.');
                description.appendChild(textDescription);

            var brand = document.createElement ( 'brand' );
            supplement.appendChild(brand);
                var textBrand = document.createTextNode('Универсал');
                brand.appendChild(textBrand);

            var packings = document.createElement ( 'packings' );
            supplement.appendChild(packings);
                packings.setAttribute ( 'packing_types_id', 'P01' );
                
                var packing = document.createElement ( 'packing' );
                packings.appendChild(packing);
                    var textPacking = document.createTextNode('2.225');
                    packing.appendChild(textPacking);

                var measurement_unit = document.createElement ( 'measurement_unit' );
                packings.appendChild(measurement_unit);
                    var textMeasurement = document.createTextNode('кг');
                    measurement_unit.appendChild(textMeasurement);

                var servings = document.createElement ( 'servings' );
                packings.appendChild(servings); 
                    var textServings = document.createTextNode('22 дози');
                    servings.appendChild(textServings);
                    
    var types = document.createElement ( 'types' );
        shop.appendChild(types); 

            var type = document.createElement ( 'type' );
            types.appendChild(type);
                type.setAttribute  ( 'type_id', 'P' );
                var textType = document.createTextNode('Протеини');
                type.appendChild(textType); 

        var purposes = document.createElement ( 'purposes' );
        shop.appendChild(purposes);                    
            var purpose = document.createElement ( 'purpose' );
            purposes.appendChild(purpose);
            purpose.setAttribute ( 'international_code', 'P21' );
                var textPurpose = document.createTextNode('Изграждане на чисти мускули');
                purpose.appendChild(textPurpose); 

        var packings_types = document.createElement ( 'packings_types' );
        shop.appendChild(packings_types);                    
            var packing_types = document.createElement ( 'packing_types' );
            packings_types.appendChild(packing_types);
            packing_types.setAttribute ( 'pid', 'P01' );
                var textPackingTypes = document.createTextNode('прах');
                packing_types.appendChild(textPackingTypes); 

document.save ( 'shop-js.xml' );