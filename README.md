## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|uer_id|integer|null:false, foreign_key: true|
|group_id|integer|null:false, foreign_key: true|
### Association
- belongs_to :user
- belings_to :group

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false, unique:true, index:true|
|email|string|null:false, unique:true|
|password|string|null:false, unique:true|
|group_id|integer|null:false, foreign_key: true|

### Association
- has many :messages
- has many :groups, through: :groups_users