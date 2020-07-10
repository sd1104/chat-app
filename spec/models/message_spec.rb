require 'rails_helper'

RSpec.describe Message, type: :model do
  
  describe '#create' do
    
    context 'can save' do
      #1-1,メッセージがあれば保存できる
      it 'is valid with body' do
        expect(build(:message, image: nil)).to be_valid
      end

      #1-2,画像があれば保存できる
      it "is valid with an image" do
        message = build(:message, body: nil)
        expect(message).to be_valid
      end

      #1-3,メッセージと画像があれば保存できる
      it "is valid with  body and image" do
        message = build(:message)
        expect(message).to be_valid
      end
    end

    context 'can not save' do
      #1,メッセージも画像も無いと保存できない
      it 'is invalid without body and image' do
        message = build(:message, body: nil, image: nil)
        message.valid?
        expect(message.errors[:body]).to include("を入力してください")
      end

      #2,group_idが無いと保存できない
      it "is invalid without a group_id" do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end

      #3,user_idが無いと保存できない
      it "is invalid without a uer_id" do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end

  end

end