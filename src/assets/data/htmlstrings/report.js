export default `<div id="content-core" class="content-core">
<div>

<!-- Tables -->
<ul class="eea-tabs two-rows" style="display: block;"><li><a href="#tab-european-data" id="tab-european-data" class="current">European data</a></li><li><a href="#tab-additional-information" id="tab-additional-information">Additional information</a></li><li><a href="#tab-metadata" id="tab-metadata">Metadata</a></li></ul><div class="eea-tabs-panels"><div class="eea-tabs-panel" style="display: block;">






















<div class="page" data-count="7"><div>
<h5 class="datatable-title">Assessment methods meta-data reported by countries (data flow D)</h5>
<p>Assessment methods meta-data describe technical facilities used for the measurement of each pollutant or one of its compounds. The data in the web-based application (AIDE D) reflect the latest reports uploaded and successfully tested by automated QC.</p>


<p>
<span class="table-definition-show">[+]</span>
<span>Show table definition</span>

</p>
<div class="table-definition-body"><ul>
<li>Assessment methods meta-data (data set D):</li>
</ul>
<table class="datatable listing" id="tabledef">
<thead>
<tr><th style="cursor: pointer;">Field name<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Description<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Data type<span class="sortdirection">&emsp;</span></th></tr>
</thead>
<tbody>
<tr class="odd">
<td>Country or terrritory</td>
<td>Country or territory name.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Namespace</td>
<td>Inspire identifier/namespace of reporting entity, given by data provider.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Network</td>
<td>Name of air quality measurement network, given by data provider.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Responsible Party</td>
<td>Name of responsible authority, institution or body.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Time Zone</td>
<td>Time zone in which aggregations and statistics are calculated (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/timezone).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Station Name</td>
<td>Name of air quality measurement station (as in AirBase), given by data provider.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>EoI Station Code</td>
<td>EoI code of air quality measurement station (as in AirBase), given by data provider.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Station Type</td>
<td>Type of Air Quality Measurement Station - information whether it is measuring background, industrial or traffic related air pollution (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/stationclassification).</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Station Area</td>
<td>Area of Air Quality Measurement Station - information whether it is measuring air pollution in urban, suburban, rural (etc.) environment (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/areaclassification).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Pollutant</td>
<td>Air polluting substance, level of which is measured and reported to the EEA (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/pollutant).</td>
<td>
<p>string</p>
</td>
</tr>
<tr class="odd">
<td>Sampling Point Local Id</td>
<td>Inspire identifier (Local Id) of sampling point, given by data provider.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Latitude</td>
<td>Latitude of air quality measurement station [decimal degrees].</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Longitude</td>
<td>Longitude of air quality measurement station [decimal degrees].</td>
<td>numeric</td>
</tr>
<tr class="even">
<td>Altitude</td>
<td>Altitude of air quality measurement station [m a.s.l.].</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Measurement Regime</td>
<td>Information on measurement regime (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/inspire/MeasurementRegimeValue).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Operational Activity Begin</td>
<td>Begin date of observation constellation (sampling point, sample, sampling process and property/pollutant).</td>
<td>datetime</td>
</tr>
<tr class="odd">
<td>Operational Activity End</td>
<td>End date of observation constellation (sampling point, sample, sampling process and property/pollutant).</td>
<td>datetime</td>
</tr>
<tr class="even">
<td>Sample Local Id</td>
<td>Inspire identifier (Local Id) of sample (Feature of Interest), given by data provider.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Sampling Process Local Id</td>
<td>Inspire identifier (Local Id) of sampling process (procedure), given by data provider.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Measurement Equipment</td>
<td>Information on equipment used for measuring air polluting substances (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/measurementequipment).</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Measurement Method</td>
<td>Information on method used for measuring air polluting substances (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/measurementmethod).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Sampling Equipment</td>
<td>Information on sampling equipment (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/samplingequipment).</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Analytical Technique</td>
<td>Information on analytical technique (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/analyticaltechnique).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Envelope URL</td>
<td>URL of CDR envelope where source data (country report) is located.</td>
<td>string</td>
</tr>
</tbody>
</table></div>


<ul>



<li>
    <strong><span>Air quality assessment methods (AIDE D)</span>
    </strong><br>
    <a class="google-analytics piwik_download" href="http://aided.apps.eea.europa.eu/" id="6af18b4a67c1447991ec1b85ec156ed7">Download file</a>
    <span style="display: none" class="google-analytics-path">/data-and-maps/data/ga-downloads/DAT-3-en/aqereporting-8/european-2014-metadata</span>
</li>





</ul>
</div><div>
<h5 class="datatable-title">Air quality annual statistics calculated by the EEA</h5>
<p>The annual aggregated air quality values have been calculated by EEA based on the primary observations (time series) uploaded by countries into CDR and successfully tested by automated QC. </p>


<p>
<span class="table-definition-show">[+]</span>
<span>Show table definition</span>

</p>
<div class="table-definition-body"><ul>
<li>Air Quality annual statistics:</li>
</ul>
<table class="datatable listing" id="tabledef">
<thead>
<tr><th style="cursor: pointer;">Field name<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Description<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Data type<span class="sortdirection">&emsp;</span></th></tr>
</thead>
<tbody>
<tr class="odd">
<td>Country Or Territory</td>
<td>Country or territory name.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Reporting Year</td>
<td>Year for which primary data have been reported/ statistics were calculated.</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Namespace</td>
<td>Inspire identifier/namespace of reporting entity, given by data provider.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Station Local Id</td>
<td>Inspire identifier (Local Id) of air quality measurement station, given by data provider.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Sampling Point Local Id</td>
<td>Inspire identifier (Local Id) of sampling point, given by data provider.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Sampling Point Latitude</td>
<td>Latitude of sampling point [decimal degrees].</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Sampling Point Longitude</td>
<td>Longitude of sampling point [decimal degrees].</td>
<td>numeric</td>
</tr>
<tr class="even">
<td>Pollutant</td>
<td>Air polluting substance, level of which is measured and reported to the EEA (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/pollutant).</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Aggregation Type</td>
<td>Information about process of data aggregation into annual values (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/aggregationprocess).</td>
<td>string</td>
</tr>
<tr class="even">
<td>AQ Value</td>
<td>Concentration or level of air polluting substance, here given as an aggregation of air pollutant concentration values from primary observation time series.</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Unit</td>
<td>Unit of concentration or level of air polluting substance (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/uom/concentration).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Begin Position</td>
<td>Date time begin of measurement (time zone as defined for the air quality network).</td>
<td>datetime</td>
</tr>
<tr class="odd">
<td>End Position</td>
<td>Date time end of measurement (time zone as defined for the air quality network).</td>
<td>datetime</td>
</tr>
<tr class="even">
<td>Validity</td>
<td>Validity flags based on Data Capture, data are 'not valid' if Data Capturestring</td>
</tr>
<tr class="odd">
<td>Verification</td>
<td>Information based on verification flags found in reported time series (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/observationverification).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Data Coverage</td>
<td>Proportion of valid measurement included in the aggregation process within averaging period, expressed as percentage. If Data Coverage &lt; 75% for averaging period of a year, annual statistics should not be included in air quality assessments, if Data Coverage &lt; 85% (in a year), annual statistics should not be included in compliance checks.</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Data Capture</td>
<td>Proportion of valid measurement time relative total measured time (time coverage) in averaging period, expressed as percentage.</td>
<td>numeric</td>
</tr>
<tr class="even">
<td>Time Coverage</td>
<td>Proportion of total measured time, calculated from start and end time of observation, within the full averaging period, expressed as percentage.</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Update Time</td>
<td>Time of the latest update of the calculated statistics.</td>
<td>datetime</td>
</tr>
</tbody>
</table></div>


<ul>



<li>
    <strong><span>Air quality annual statistics (AIDE F)</span>
    </strong><br>
    <a class="google-analytics piwik_download" href="http://aidef.apps.eea.europa.eu/" id="23110a68ba054d66b38301bcaf3e89e6">Download file</a>
    <span style="display: none" class="google-analytics-path">/data-and-maps/data/ga-downloads/DAT-3-en/aqereporting-8/aide-2014-air-data-explorer</span>
</li>





</ul>
</div><div>
<h5 class="datatable-title">Air quality time series (E1a &amp; E2a data sets)</h5>
<p>These data sets have been exported from EEA’s SQL data base which stores primary validated assessment data and primary up-to-date assessment data (time series, data sets E1a and E2a, respectively) reported by countries and successfully tested by automated QC.</p>


<p>
<span class="table-definition-show">[+]</span>
<span>Show table definition</span>

</p>
<div class="table-definition-body"><ul>
<li>Air Quality annual statistics:</li>
</ul>
<table class="datatable listing" id="tabledef">
<thead>
<tr><th style="cursor: pointer;">Field name<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Description<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Data type<span class="sortdirection">&emsp;</span></th></tr>
</thead>
<tbody>
<tr class="odd">
<td>Countrycode</td>
<td>Country or territory ISO2 code.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Namespace</td>
<td>Inspire identifier/namespace of reporting entity, given by data provider.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>AirQualityNetwork</td>
<td><span>Inspire identifier (Local Id) of air quality measurement network, given by data provider.&nbsp;</span></td>
<td>string</td>
</tr>
<tr class="even">
<td>AirQualityStation</td>
<td><span>Inspire identifier (Local Id) of air quality measurement station, given by data provider.</span></td>
<td>string</td>
</tr>
<tr class="odd">
<td>AirQualityStationEoICode</td>
<td><span>EoI code of air quality measurement station (as in AirBase).</span></td>
<td>string</td>
</tr>
<tr class="even">
<td>Sampling Point</td>
<td>Inspire identifier (Local Id) of sampling point, given by data provider.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>SamplingProcess</td>
<td><span>Inspire identifier (LocalId) of sampling process (procedure), given by data provider.</span></td>
<td>string</td>
</tr>
<tr class="even">
<td>Sample</td>
<td><span>Inspire identifier (LocalId) of sample (featureofinterest), given by data provider.</span></td>
<td>string</td>
</tr>
<tr class="odd">
<td>AirPollutant</td>
<td><span>Air polluting substance, level of which is measured and reported to the EEA (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/pollutant).</span></td>
<td>string</td>
</tr>
<tr class="even">
<td>AirPollutantCode</td>
<td><span>Air polluting substance, level of which is measured and reported to the EEA (see id in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/pollutant).</span></td>
<td>string</td>
</tr>
<tr class="odd">
<td>AveragingTime</td>
<td><span>Averaging time/frequency of reported air quality values (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/primaryObse rvation).</span></td>
<td>string</td>
</tr>
<tr class="even">
<td>Concentration</td>
<td><span>Measured concentration of air polluting substance.</span></td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>UnitOfMeasurement</td>
<td><span>Unit of concentration of air polluting substance (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/uom/concentrat ion).</span></td>
<td>string</td>
</tr>
<tr class="even">
<td>DatetimeBegin</td>
<td><span>Date-time begin of measurement (UTC+1 for hourly data and original time zone for other averaging times).</span></td>
<td>datetime</td>
</tr>
<tr class="odd">
<td>DatetimeEnd</td>
<td><span>Date-time end of measurement (UTC+1 for hourly data and original time zone for other averaging times).</span></td>
<td>datetime</td>
</tr>
<tr class="even">
<td>Validity</td>
<td><span>Information about data validity, given by data provider (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/observationvalidity).</span></td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Verification</td>
<td><span>Information whether data have been verified by data provider (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/observationverification).</span></td>
<td>numeric</td>
</tr>
</tbody>
</table></div>


<ul>



<li>
    <strong><span>Air quality time series (E1a &amp; E2a data sets)</span>
    </strong><br>
    <span class="link-htm"><a class="google-analytics piwik_download" href="http://discomap.eea.europa.eu/map/fme/AirQualityExport.htm" id="3c15e039f1ad4e81b83d473e5f6ec0cb">Download file</a></span>
    <span style="display: none" class="google-analytics-path">/data-and-maps/data/ga-downloads/DAT-3-en/aqereporting-8/aide-2014-air-data-explorer</span>
</li>





</ul>
</div><div>
<h5 class="datatable-title">Air quality zones information reported by countries (data flow B)</h5>
<p>Air quality zones information describes delimitation and type of zones and agglomerations in which the assessment and management of air quality is to be carried out. The data in the web-based application (AIDE B) reflect the latest reports uploaded and successfully tested by automated QC.</p>


<p>
<span class="table-definition-show">[+]</span>
<span>Show table definition</span>

</p>
<div class="table-definition-body"><ul>
<li>Air quality zones (data set B):</li>
</ul>
<table class="datatable listing" id="tabledef">
<thead>
<tr><th style="cursor: pointer;">Field name<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Description<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Data type<span class="sortdirection">&emsp;</span></th></tr>
</thead>
<tbody>
<tr class="odd">
<td>Country or territory</td>
<td>Country or territory name.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Reporting Year</td>
<td>Year for which air quality zone has been reported.</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Namespace</td>
<td>Inspire identifier/namespace of reporting entity, given by data provider.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Zone Code</td>
<td>Identifier of air quality zone, given by data provider.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Zone Id</td>
<td>Inspire identifier (Local Id) of air quality zone, given by data provider.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Geographical Name</td>
<td>Geographical Name of air quality zone</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Begin Time</td>
<td>Begin time of air quality zone.</td>
<td>datetime</td>
</tr>
<tr class="even">
<td>End Time</td>
<td>End time of air quality zone.</td>
<td>datetime</td>
</tr>
<tr class="odd">
<td>AQD Zone Type</td>
<td>Air quality zone type (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/zonetype).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Pollutant</td>
<td>Air polluting substance (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/pollutant) for which the zone is valid.</td>
<td>
<p>string</p>
</td>
</tr>
<tr class="odd">
<td>Protection Target</td>
<td>Protection target (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/protectiontarget) for which the zone is valid.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Resident Population</td>
<td>Number of population residing in the air quality zone.</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Resident Population Year</td>
<td>Reference year the resident population number.</td>
<td>numeric</td>
</tr>
<tr class="even">
<td>Area</td>
<td>Area of the air quality zone.</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Time Extension Exemption</td>
<td>Type of time extension granted for the zone (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/timeextensiontypes).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Competent Authority</td>
<td>Name of responsible authority, institution or body.</td>
<td>string</td>
</tr>
<tr class="odd">
<td><span>Telephone</span></td>
<td><span>Telephone number of competent authority.</span></td>
<td>string</td>
</tr>
<tr class="even">
<td><span>Address</span></td>
<td><span>Address of competent authority.</span></td>
<td>string</td>
</tr>
<tr class="odd">
<td>Website</td>
<td>Website of competent authority.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Envelope URL</td>
<td>URL of CDR envelope where source data (country report) is located.</td>
<td>string</td>
</tr>
</tbody>
</table></div>


<ul>



<li>
    <strong><span>Air quality zones information (AIDE B)</span>
    </strong><br>
    <a class="google-analytics piwik_download" href="http://aideb.apps.eea.europa.eu/" id="e7ab6e09815c4a3dad3ad759ef942de0">Download file</a>
    <span style="display: none" class="google-analytics-path">/data-and-maps/data/ga-downloads/DAT-3-en/aqereporting-8/air-quality-zones-information</span>
</li>





</ul>
</div><div>
<h5 class="datatable-title">Air quality assessment regimes reported by countries (data flow C)</h5>
<p>This data set describes air quality assessment regimes applied for each pollutant within individual zones and agglomerations. The data in the web-based application (AIDE C) reflect the latest reports uploaded and successfully tested by automated QC.</p>


<p>
<span class="table-definition-show">[+]</span>
<span>Show table definition</span>

</p>
<div class="table-definition-body"><ul>
<li>Air quality assessment regimes (data set C):</li>
</ul>
<table class="datatable listing" id="tabledef">
<thead>
<tr><th style="cursor: pointer;">Field name<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Description<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Data type<span class="sortdirection">&emsp;</span></th></tr>
</thead>
<tbody>
<tr class="odd">
<td>Country or territory</td>
<td>Country or territory name.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Reporting Year</td>
<td>Year for which air quality zone has been reported.</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Namespace</td>
<td>Inspire identifier/namespace of reporting entity, given by data provider.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Assessment Id</td>
<td>Inspire identifier (Local Id) of air quality assessment regime, given by data provider.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Zone Id</td>
<td>Inspire identifier (Local Id) of air quality zone, given by data provider.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Pollutant</td>
<td>Air polluting substance (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/pollutant) for which the zone is valid.</td>
<td>
<p>string</p>
</td>
</tr>
<tr class="odd">
<td>Protection Target</td>
<td>Protection target (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/protectiontarget) for which the zone is valid.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Objective Type</td>
<td>Objective type (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/objectivetype) for which the air quality assessment regime has been reported.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Reporting Metric</td>
<td>Reporting metric (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/reportingmetric) for which the air quality assessment regime has been reported.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Exceedance Attainment</td>
<td>Status of assessment threshold exceedance (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/assessmentthresholdexceedance) reported with the assessment regime.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Assessment Type</td>
<td>Type of air quality assessment regime (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/assessmenttype).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Description</td>
<td>Free text description of the type of assessment regime.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Classification Date</td>
<td>Issue date of the classification report.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Classification Report</td>
<td>Web link to the classification report.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Sampling Point Id</td>
<td>Inspire identifier (Local Id) of sampling point, given by data provider/ link to assessment method.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Model Id</td>
<td>Inspire identifier (Local Id) of air quality model, given by data provider/ link to assessment method.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Envelope URL</td>
<td>URL of CDR envelope where source data (country report) is located.</td>
<td>string</td>
</tr>
</tbody>
</table></div>


<ul>



<li>
    <strong><span>Air quality assessment regimes (AIDE C)</span>
    </strong><br>
    <a class="google-analytics piwik_download" href="http://aidec.apps.eea.europa.eu/" id="0b8b7ddc9ae140ada84e5d31214f3fc7">Download file</a>
    <span style="display: none" class="google-analytics-path">/data-and-maps/data/ga-downloads/DAT-3-en/aqereporting-8/air-quality-assessment-regimes-aide-c</span>
</li>





</ul>
</div><div>
<h5 class="datatable-title">Attainments of (air quality) environmental objectives reported by countries (data flow G)</h5>
<p>This data set shows the attainment status of the air quality environmental objectives set in the European legislation as delivered by countries for each pollutant within individual zones and agglomerations. The data in the web-based application (AIDE G) reflect the latest reports uploaded and successfully tested by automated QC.</p>


<p>
<span class="table-definition-show">[+]</span>
<span>Show table definition</span>

</p>
<div class="table-definition-body"><ul>
<li>Air quality attainments (data set G):</li>
</ul>
<table class="datatable listing" id="tabledef">
<thead>
<tr><th style="cursor: pointer;">Field name<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Description<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Data type<span class="sortdirection">&emsp;</span></th></tr>
</thead>
<tbody>
<tr class="odd">
<td>Country or territory</td>
<td>Country or territory name.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Reporting Year</td>
<td>Year for which air quality zone has been reported.</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Namespace</td>
<td>Inspire identifier/namespace of reporting entity, given by data provider.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Attainment Id</td>
<td>Inspire identifier (Local Id) of attainment, given by data provider.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Assessment Id</td>
<td>Inspire identifier (Local Id) of air quality assessment regime, given by data provider.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Zone Id</td>
<td>Inspire identifier (Local Id) of air quality zone, given by data provider.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Resident Population</td>
<td>Number of population residing in the air quality zone for which the attainment has been reported.</td>
<td>numeric</td>
</tr>
<tr class="even">
<td>Pollutant</td>
<td>Air polluting substance (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/pollutant) for which the zone is valid.</td>
<td>
<p>string</p>
</td>
</tr>
<tr class="odd">
<td>Protection Target</td>
<td>Protection target (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/protectiontarget) for which the zone is valid.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Objective Type</td>
<td>Objective type (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/objectivetype) for which the air quality assessment regime has been reported.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Reporting Metric</td>
<td>Reporting metric (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/reportingmetric) for which the air quality assessment regime has been reported.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Exceedance Final</td>
<td>Final (after adjustment) status of exceedance: true/false.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Exceedance Threshold</td>
<td>Exceedance threshold for environmental objective (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabularyconcept/aq/environmentalobjective) for which the attainment has been reported.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Aggregation Type</td>
<td>Information about process of data aggregation into annual values (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/aggregationprocess).</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Final Numerical Exceedance</td>
<td>Final (after adjustment) level of air pollution in exceedance.</td>
<td>numeric</td>
</tr>
<tr class="even">
<td>Final Number Exceedances</td>
<td>Final (after adjustment) number of exceedances.</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Classification Area</td>
<td>Classification of the area of exceedance (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/areaclassification).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Surface Area Final</td>
<td>Area extent where exceedance occurred (after adjustment).</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Road Length Final</td>
<td>Length of road where exceedance occurred (after adjustment).</td>
<td>numeric</td>
</tr>
<tr class="even">
<td>Population Exposed Final</td>
<td>Number of population exposed to exceedance (after adjustment).</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Sensitive Population Final</td>
<td>Number of sensitive population exposed to exceedance (after adjustment).</td>
<td>numeric</td>
</tr>
<tr class="even">
<td>Ecosystem Area Exposed</td>
<td>Ecosystem area extent where exceedance occurred (after adjustment).</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Infrastructure Services Final</td>
<td>Infrastructure services exposed to exceedance (after adjustment).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Reference Year Final</td>
<td>Reference year for final exceedance (after adjustment).</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Base Numerical Exceedance</td>
<td>Level of air pollution in exceedance (before adjustment).</td>
<td>numeric</td>
</tr>
<tr class="even">
<td>Base Number Exceedances</td>
<td>Number of exceedances (before adjustment).</td>
<td>numeric</td>
</tr>
<tr class="odd">
<td>Adjustment</td>
<td>Indicates if adjustment has been applied (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/adjustmenttype).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Adjustment Source</td>
<td>Reason for adjustment (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/adjustmentsourcetype).</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Adjustment Type</td>
<td>Type of adjustment applied (see in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/adjustmenttype).</td>
<td>string</td>
</tr>
<tr class="even">
<td>Assessment Type</td>
<td>Type of air quality assessment regime (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/assessmenttype).</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Assessment Type Description</td>
<td>Free text description of the type of assessment regime.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Model Id</td>
<td>Inspire identifier (Local Id) of air quality model, given by data provider/ link to assessment method.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Sampling Point Id</td>
<td>Inspire identifier (Local Id) of sampling point, given by data provider/ link to assessment method.</td>
<td>string</td>
</tr>
<tr class="even">
<td>Comment</td>
<td>Free text comment on attainment.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Envelope URL</td>
<td>URL of CDR envelope where source data (country report) is located.</td>
<td>string</td>
</tr>
</tbody>
</table></div>


<ul>



<li>
    <strong><span>Air quality attainments (AIDE G) </span>
    </strong><br>
    <a class="google-analytics piwik_download" href="http://aideg.apps.eea.europa.eu/" id="7b43c207154041d98c1197bc4fa429d5">Download file</a>
    <span style="display: none" class="google-analytics-path">/data-and-maps/data/ga-downloads/DAT-3-en/aqereporting-8/air-quality-attainments-aide-g</span>
</li>





</ul>
</div><div>
<h5 class="datatable-title">Air quality zone geometries reported by countries (data flow B)</h5>
<p>The air quality zone geometries are available in several spatial formats (ESRI Shapefile, SpatialLite, ESRI File Geodatabase, Google Earth KML) as well as an attribute table in Excel. The data reflect the latest reports uploaded and successfully tested by automated QC.</p>


<p>
<span class="table-definition-show">[+]</span>
<span>Show table definition</span>

</p>
<div class="table-definition-body"><ul>
<li>Air quality zones (data set B):</li>
</ul>
<table class="datatable listing" id="tabledef">
<thead>
<tr><th style="cursor: pointer;">Field name<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Description<span class="sortdirection">&emsp;</span></th><th style="cursor: pointer;">Data type<span class="sortdirection">&emsp;</span></th></tr>
</thead>
<tbody>
<tr class="odd">
<td>OBJECTID</td>
<td>Id (internal) of the zone geometry.</td>
<td>numeric</td>
</tr>
<tr class="even">
<td>ZoneId</td>
<td>Inspire identifier (Local Id) of air quality zone, given by data provider.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>CountryOrTerritory</td>
<td>Country or territory name.</td>
<td>string</td>
</tr>
<tr class="even">
<td>ISO2</td>
<td>Country or territory ISO2 code.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Namespace</td>
<td>Inspire identifier/namespace of reporting entity, given by data provider.</td>
<td>string</td>
</tr>
<tr class="even">
<td>ProtectionTarget</td>
<td>Protection target (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/protectiontarget) for which the zone is valid.</td>
<td>string</td>
</tr>
<tr class="odd">
<td>Pollutant</td>
<td>Air polluting substance (see notation in Data Dictionary: http://dd.eionet.europa.eu/vocabulary/aq/pollutant) for which the zone is valid.</td>
<td>
<p>string</p>
</td>
</tr>
<tr class="even">
<td>UpdateTime</td>
<td>Indicates the time of the latest update of geometry.</td>
<td>datetime</td>
</tr>
<tr class="odd">
<td>SHAPE_Length</td>
<td>Length of zone geometry perimeter [m].</td>
<td>numeric</td>
</tr>
<tr class="even">
<td>SHAPE_Area</td>
<td>Area of zone geometry [m2].</td>
<td>numeric</td>
</tr>
</tbody>
</table></div>


<ul>



<li>
    <strong><span>Air Quality Zones Feature Download Service</span>
    </strong><br>
    <a class="google-analytics piwik_download" href="http://maps.eea.europa.eu/wab/AirQualityZones/" id="95d99f599dbd41c08e57ff1951d301a8">Download file</a>
    <span style="display: none" class="google-analytics-path">/data-and-maps/data/ga-downloads/DAT-3-en/aqereporting-8/air-quality-zones-e-reporting-wfs</span>
</li>





</ul>
</div></div></div><div class="eea-tabs-panel" style="display: none;">




<div class="page" data-count="1"><div>
<h5 class="datatable-title">AQ e-Reporting products on EEA Data Service</h5>
<p>This set of products reflects the current, live status of air quality data collected/calculated by the European Environment Agency. Please read the product description document for more details.</p>



<ul>



<li>
    <strong><span>AQeReporting_products_2018.pdf (PDF document - 619 KB)</span>
    </strong><br>
    <span class="link-pdf"><a class="google-analytics piwik_download" href="http://ftp.eea.europa.eu/www/aqereporting-3/AQeReporting_products_2018_v1.pdf" id="1da2118ac2f14abbb495473f7164456d">Download file</a></span>
    <span style="display: none" class="google-analytics-path">/data-and-maps/data/ga-downloads/DAT-3-en/aqereporting-8/aqereporting_products_2016</span>
</li>





</ul>
</div></div></div><div class="metadata-container eea-tabs-panel" style="display: none;">

<div class="page" data-count="1"><dl>

<!-- Reporting obligation(s) (ROD) -->

<dt>

<img class="eea-flexible-tooltip-right lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" alt="information.png" data-src="https://www.eea.europa.eu/information.png">

<span>Reporting obligations (ROD)</span>
</dt>

<dd>
<ul>
<li>

<span class="link-external"><a href="http://rod.eionet.europa.eu/obligations/670" title="(B) Information on zones and agglomerations (Article 6)">(B) Information on zones and agglomerations (Article 6)</a></span>
</li>
<li>

<span class="link-external"><a href="http://rod.eionet.europa.eu/obligations/671" title="(C) Information on the assessment regime (Article 7)">(C) Information on the assessment regime (Article 7)</a></span>
</li>
<li>

<span class="link-external"><a href="http://rod.eionet.europa.eu/obligations/672" title="(D) Information on the assessment methods (Articles 8 and 9) - for fix ...">(D) Information on the assessment methods (Articles 8 and 9) - for fix ...</a></span>
</li>
<li>

<span class="link-external"><a href="http://rod.eionet.europa.eu/obligations/673" title="(E1a) Information on primary validated assessment data - measurements  ...">(E1a) Information on primary validated assessment data - measurements  ...</a></span>
</li>
<li>

<span class="link-external"><a href="http://rod.eionet.europa.eu/obligations/679" title="(G) Information on the attainment of environmental objectives (Article ...">(G) Information on the attainment of environmental objectives (Article ...</a></span>
</li>
</ul>
</dd>






<!-- Related website(s)/service(s) -->



<!-- Relation: parent data sets and derived data sets -->


<!-- Temporal coverage -->



<!-- Title -->
<dt class="temporal-coverage">

<img class="eea-flexible-tooltip-right lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" alt="information.png" data-src="https://www.eea.europa.eu/information.png">

<span>Temporal coverage:</span>
</dt>

<!--- Body -->
<dd id="tempCoverage">

<span id="tempCoverage">
<a class="link-category" rel="tag" href="#">Dynamic</a>
</span>
</dd>




<!-- Last upload -->

<dt>

<img class="eea-flexible-tooltip-right lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" alt="information.png" data-src="https://www.eea.europa.eu/information.png">

<span>Last upload:</span>
</dt>
<dd>26 Mar 2018</dd>


<!-- Geotags -->






<dt class="geotags">

<img class="eea-flexible-tooltip-right lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" alt="information.png" data-src="https://www.eea.europa.eu/information.png">

<span>Geographic coverage:</span>
</dt>


<dd class="geotags">

<span>
<a class="link-category" rel="tag">Albania</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Andorra</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Austria</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Belgium</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Bosnia and Herzegovina</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Bulgaria</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Croatia</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Cyprus</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Czech Republic</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Denmark</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Estonia</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Finland</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Former Yugoslav Republic of Macedonia, the</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">France</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Germany</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Gibraltar</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Greece</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Hungary</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Iceland</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Ireland</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Italy</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Kosovo (UNSCR 1244/99)</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Latvia</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Liechtenstein</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Lithuania</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Luxembourg</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Malta</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Montenegro</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Netherlands</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Norway</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Poland</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Portugal</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Romania</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Serbia</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Slovakia</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Slovenia</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Spain</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Sweden</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Switzerland</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">Turkey</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag">United Kingdom</a>

</span>

</dd>






<!-- Geographic accuracy -->



<!-- Tags -->

<dt style="clear: left" id="keywords-tags">

<img class="eea-flexible-tooltip-right lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" alt="information.png" data-src="https://www.eea.europa.eu/information.png">

<span>Tags:</span>
</dt>
<dd class="documentByLine category">

<span>
<a class="link-category" rel="tag" title="point data">point data</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag" title="priority data flow">priority data flow</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag" title="geospatial data">geospatial data</a>
<span class="separator">,</span>
</span>

<span>
<a class="link-category" rel="tag" title="air quality">air quality</a>

</span>

</dd>


<!-- Scale of the data set -->


<!-- Rights -->

<dt id="dataset_rights">

<img class="eea-flexible-tooltip-right lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" alt="information.png" data-src="https://www.eea.europa.eu/information.png">

<span>Rights:</span>
</dt>
<dd>EEA standard re-use policy: unless otherwise indicated, re-use of content on the EEA website for commercial or non-commercial purposes is permitted free of charge, provided that the source is acknowledged (https://www.eea.europa.eu/legal/copyright). Copyright holder: European Commission.</dd>


<!-- Disclaimer -->


<!-- Methodology -->


<!-- Unit -->



<!-- Reference system -->


<!-- Source -->


<dt>

<img class="eea-flexible-tooltip-right lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" alt="information.png" data-src="https://www.eea.europa.eu/information.png">

<span>Data sources</span>
</dt>
<dd><p>Air quality information based on national reports from EEA member and cooperating countries.</p></dd>



<!-- Owner -->

<dt>

<img class="eea-flexible-tooltip-right lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" alt="information.png" data-src="https://www.eea.europa.eu/information.png">

<span>Owners:</span>
</dt>


<dd>
<a href="https://www.eea.europa.eu/data-and-maps/data-providers-and-partners/european-commission" title="European Commission">European Commission</a>
</dd>




<!-- Processor -->

<dt>

<img class="eea-flexible-tooltip-right lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=" alt="information.png" data-src="https://www.eea.europa.eu/information.png">

<span>Processors:</span>
</dt>


<dd>
<a href="https://www.eea.europa.eu/data-and-maps/data-providers-and-partners/european-environment-agency" title="European Environment Agency (EEA)">European Environment Agency (EEA)</a>
</dd>




<!-- EEA management plan code -->


<!-- Contact persons for EEA -->


</dl></div></div></div><div class="paginate">






























<!-- Metadata -->

</div>


<!-- Additional information -->

<h3>Additional information</h3>
<div class="additionalInfo"><p>Users of the data are advised to pay attention to the validation and verification flags associated with the raw data and aggregated statistics as well as to the information on data coverage. References to these concepts can be found within the documentation <span class="link-pdf"><a href="http://ftp.eea.europa.eu/www/aqereporting-3/AQeReporting_products_2018_v1.pdf" class="piwik_download">AQeReporting_products_2018.pdf</a></span></p>
<p><b><br></b></p>
<div class="portalMessage informationMessage">DISCLAIMER: web applications accessible through this page are connected live with EEA's databases and available data and are under constant improvement. Please make sure that all data you need for your analysis/assessments from the different viewers are downloaded within the same day and proper versioning is maintained on your side.</div>
<div class="portalMessage informationMessage">DISCLAIMER: despite constant improvement of the quality of data collected within new reporting procedures for air quality information, still inconsistencies, incompleteness and/or errors cannot be ruled out. EEA would appreciate if any possible problems are brought to our attention.</div></div>


<div class="visualClear">&nbsp;</div>


<!-- do not show map #21121 -->

</div>
</div>`