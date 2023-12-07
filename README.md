

aws sns publish --topic-arn "arn:aws:sns:eu-west-1:517039770760:SHSDemoStack-DemoTopic2BE41B12-gpWZj85JZIO2" \
--message-attributes '{ "user_type":{ "DataType":"String","StringValue":"Lecturer" } }' --message file://message.json

aws sns publish --topic-arn "arn:aws:sns:eu-west-1:517039770760:SHSDemoStack-DemoTopic2BE41B12-gpWZj85JZIO2"  --message file://badmessage.json


aws sns publish --topic-arn "arn:aws:sns:eu-west-1:517039770760:SHSDemoStack-DemoTopic2BE41B12-ZC7ZZeZawt8m"
--message-attributes file://attributes.json --message file://message.json
