## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
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

### Association
- has_many :messages
- has_many :groups, through: :groups_users
- has_many :groups_users


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false, unique:true|

### Association
- has_many :messages
- has_many :users, through: :groups_users
- has_many :groups_users


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null:false, foreign_key: true|
|user_id|integer|null:false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user