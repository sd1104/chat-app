## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|uer_id|references|null:false, foreign_key: true|
|group_id|references|null:false, foreign_key: true|
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
- has_many :groups, through: :group_users
- has_many :group_users


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false, unique:true, index:true|

### Association
- has_many :messages
- has_many :users, through: :group_users
- has_many :group_users


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|references|null:false, foreign_key: true|
|user_id|references|null:false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user