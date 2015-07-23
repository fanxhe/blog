use Rack::Auth::Basic, "Restricted" do |username, password|
  [username, password] == [ENV["USERNAME"], ENV["PASSWORD"]]
end if ENV["TEST"]

use Rack::Static, urls: [""], root: "_site", index: "index.html"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('_site/index.html', File::RDONLY)
  ]
}
