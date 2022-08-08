public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> contactList(){
        try {
            /*if(Schema.sObjectType.Contact.fields.Name.isAccessible()){
                return null;
             }*/
             return [Select Id, Name, Title, Phone, Email, Picture__c from Contact where Picture__c != null Limit 5];
          
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getSearchedContacts(integer n){
        try {

           //string searchKeyword =  '%'+firstName + '%';
          // system.debug('controller'+searchKeyword +' '+noOfRecords);
           /*if(!Schema.sObjectType.Contact.fields.Email.isAccessible()){
                return null;
            }*/
            return [Select  Email, Phone from Contact limit :n];

             
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}