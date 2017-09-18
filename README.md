at-form-lookup
==============


Local data 
  * comes from available, enum or xvaluelist

Remote data
  * comes from url or xurl

  Aditional properties
  * noCredentials
  * noPreload
  * params


Initial value(s)
  * comes from value

Initial search term
  *  comes from initialSearchTerm

Item selection
  * selected from dropdown
  * maxItems says how many can be selected




Initialization of at-form-lookup

Initial state

* no options (empty available, enum and xvaluelist)
* no value
* no searchterm
* no url (or xurl)
Result: info message = no data available

Initalized with local data (available, enum, xvaluelist, value, searchTerm)
Initalized with remote data (url/xurl and params, value, searchTerm)
