trigger triggerOnAccount on Account (before insert) {
    for(Account acc : trigger.new){
        acc.Name = acc.Name + 'Test Khushboo';
    }
}