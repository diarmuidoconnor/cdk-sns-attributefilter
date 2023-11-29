

aws sns publish --topic-arn "arn:aws:sns:eu-west-1:517039770760:SHSDemoStack-DemoTopic2BE41B12-02LgofONc5I0" \
--message-attributes '{ "user_type":{ "DataType":"String","StringValue":"Student" } }' --message file://message.json

aws sns publish --topic-arn "arn:aws:sns:eu-west-1:517039770760:SHSDemoStack-DemoTopic2BE41B12-paPr90UK7POD"  --message file://message.json