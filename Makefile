.PHONY: clean deploy dev dist doc node_modules release storybook test

node_modules:
	@npm install

dev:
	@node_modules/.bin/rollup -c -w

dist:
	@node_modules/.bin/rollup -c

test:
	@node_modules/.bin/jest

watch:
	@node_modules/.bin/jest --watch

release: dist doc deploy

doc:
	@node_modules/.bin/build-storybook -c .storybook -o doc

storybook:
	@node_modules/.bin/start-storybook -p 9001 -c .storybook

deploy:
	@aws s3 sync ./doc/ s3://styleguide.theconversation.com/ --acl public-read --delete --cache-control 'max-age=300'

clean:
	@rm -rf dist doc node_modules
