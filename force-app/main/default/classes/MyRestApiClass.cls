@RestResource(urlMapping='/Account/*')
global with sharing class MyRestApiClass{

    @HttpGet
    global static List<Account> getRecords(){
        List<Account> accList =  new List<ACcount>();
        for(Account acc:[Select Name,Active__c from Account Limit 1]){
            accList.add(acc);
        }
        system.debug('accList:'+accList);
        //Object 
        //return [Select Name,Active__c from Account Limit 1];
       // Array 
       return accList;
        
        
    }
}