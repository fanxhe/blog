use Rack::Static, urls: ["/"], root: ".", index: "blog3.html"

  # :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('blog3.html', File::RDONLY)
  ]
}