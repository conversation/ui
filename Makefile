.PHONY: clean deploy dist doc lint node_modules publish release storybook test watch

node_modules:
	@npm install

dist:
	@npm run build

test:
	@npx jest

watch:
	@npx jest --watch

lint:
	@npx standard

release: dist doc deploy publish

doc:
	@npx build-storybook -c .storybook -o doc

storybook:
	@npx start-storybook -p 9001 -c .storybook --ci

storybook-docker:
	@docker-compose up

publish:
	@npm publish

deploy:
	@aws s3 sync ./doc/ s3://styleguide.theconversation.com/ --acl public-read --delete --cache-control 'max-age=300'

clean:
	@rm -rf dist doc node_modules
