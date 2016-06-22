at-form-lookup
==============
### unit test rework design analysis

#### Why is rework needed at all?
As it stands right now it will be very difficult for at-form-lookup to pass unit testing. at-form-lookup right now mixes its two modes of operation (explained later) which makes using and testing the element difficult.

#### The goals of the rework
1. Clearly separate modes of operation
2. Element must be initialized correctly via
  2. attributes, as `<element property="value">` set in html
  * properties, as `element.property = value` set in code
  * and any combination of both, according to the modes of operation
3. all `property-change` handlers must correctly change element state after element is initialized
4. all initializing code and `property-change` handlers must guard against invalid values
5. `disabled`, `required`, `hide` and `errorMessage` properties must set correct valid state both during initialization and after during validation
6. switching between modes of operation must work

#### Modes of operation
At its creation `at-form-lookup` was intended to work with both local data and remote data. Thus this analysis recognizes that `at-form-lookup` has two modes of operation
  - LOCAL_DATA
  - REMOTE_DATA

`at-form-lookup` has two properties for specifying remote data url: `url` and `xurl`, hereinafter `URL`. If `URL` is a valid url string mode of operation is `REMOTE_DATA`. Else mode of operation is `LOCAL_DATA`. By default mode of operation is `LOCAL_DATA`, since default value of `URL` is empty string.

Mode of operation can change from `LOCAL_DATA` to `REMOTE_DATA` by setting the `URL` or from `REMOTE_DATA` to `LOCAL_DATA` by clearing the `URL`.

##### Mode `LOCAL_DATA`
Properties that govern how `LOCAL_DATA` mode of operation works are as follows
  - value - says which item(s) are currently selected
  - available - which items are available for selection as comma separated string `"value1,value2,...,valueN"`
  - enum - which items are available for selection as array of strings `["value1", "value2", ..., "valueN"]`
  - xvaluelist - which items are available for selection as array of title, value pairs `[{ title: "Item 1", vlaue: "value1"}, { title: "Item 2", value: "value2"}, ... , { title: "Item N", value: "valueN"}]`

Properties that govern `REMOTE_DATA` mode of operation are ignored, with the exception of `URL` property which switches modes.

##### Mode `REMOTE_DATA`
Properties that govern how `REMOTE_DATA` mode of operation works are as follows
 - value - says which item(s) are currently selected
 - `URL` - says where the items should be fetched from
 - noCredentials - says whether request should send authentication data
 - noPreload - says whether items should be loaded in advance before element is displayed on the page
 - params - additional parameters for fetching the data from the server

#### Goals of testing
  - both modes of operation must be covered with as many tests as time/resources allow
  - element's properties must be tested both as attributes and properties with both invalid and valid values

This will make sure that element is working correctly and is stable.
