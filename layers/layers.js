var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LIN_1 = new ol.format.GeoJSON();
var features_LIN_1 = format_LIN_1.readFeatures(json_LIN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIN_1.addFeatures(features_LIN_1);
var lyr_LIN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIN_1, 
                style: style_LIN_1,
                popuplayertitle: 'LIN',
                interactive: true,
                title: '<img src="styles/legend/LIN_1.png" /> LIN'
            });
var format_SYST_2 = new ol.format.GeoJSON();
var features_SYST_2 = format_SYST_2.readFeatures(json_SYST_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SYST_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SYST_2.addFeatures(features_SYST_2);
var lyr_SYST_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SYST_2, 
                style: style_SYST_2,
                popuplayertitle: 'SYST',
                interactive: true,
                title: '<img src="styles/legend/SYST_2.png" /> SYST'
            });
var format_numerodordre_3 = new ol.format.GeoJSON();
var features_numerodordre_3 = format_numerodordre_3.readFeatures(json_numerodordre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_numerodordre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_numerodordre_3.addFeatures(features_numerodordre_3);
var lyr_numerodordre_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_numerodordre_3, 
                style: style_numerodordre_3,
                popuplayertitle: 'numero d\'ordre',
                interactive: true,
                title: '<img src="styles/legend/numerodordre_3.png" /> numero d\'ordre'
            });
var format_numerodordresys_4 = new ol.format.GeoJSON();
var features_numerodordresys_4 = format_numerodordresys_4.readFeatures(json_numerodordresys_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_numerodordresys_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_numerodordresys_4.addFeatures(features_numerodordresys_4);
var lyr_numerodordresys_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_numerodordresys_4, 
                style: style_numerodordresys_4,
                popuplayertitle: 'numero d\'ordre sys',
                interactive: true,
                title: '<img src="styles/legend/numerodordresys_4.png" /> numero d\'ordre sys'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LIN_1.setVisible(true);lyr_SYST_2.setVisible(true);lyr_numerodordre_3.setVisible(true);lyr_numerodordresys_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LIN_1,lyr_SYST_2,lyr_numerodordre_3,lyr_numerodordresys_4];
lyr_LIN_1.set('fieldAliases', {'G': 'G', });
lyr_SYST_2.set('fieldAliases', {'S': 'S', });
lyr_numerodordre_3.set('fieldAliases', {'n': 'n', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_numerodordresys_4.set('fieldAliases', {'n': 'n', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_LIN_1.set('fieldImages', {'G': '', });
lyr_SYST_2.set('fieldImages', {'S': '', });
lyr_numerodordre_3.set('fieldImages', {'n': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_numerodordresys_4.set('fieldImages', {'n': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_LIN_1.set('fieldLabels', {'G': 'no label', });
lyr_SYST_2.set('fieldLabels', {'S': 'no label', });
lyr_numerodordre_3.set('fieldLabels', {'n': 'no label', });
lyr_numerodordresys_4.set('fieldLabels', {'n': 'no label', });
lyr_numerodordresys_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});