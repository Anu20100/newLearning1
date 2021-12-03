public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> contactList(){
        try {
            return [Select Id, Name, Title, Phone, Email, Picture__c from Contact where Picture__c != null Limit 5];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}
