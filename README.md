# Incorrect Usage of $inc operator in MongoDB
This example demonstrates an incorrect usage of the `$inc` operator in a MongoDB `updateOne` operation. The `$inc` operator is used to increment a numerical field, however in this case, it attempts to increment a field with a string value. This results in an error.

## Bug
The following code shows the incorrect usage:
```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("6556546546546")},{$inc:{field1:1,field2:"abc"}});
```
## Solution
The solution is to provide numerical values for all fields you want to increment using the `$inc` operator:
```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("6556546546546")},{$inc:{field1:1,field2:1}});
```