FactoryBot.define do

  factory :message do
    body {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/Image-1.png")}
    user
    group
  end

end