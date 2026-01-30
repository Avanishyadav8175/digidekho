# Admin Panel CRUD Testing Guide

## Testing Instructions

### 1. Services Management
**Test Add Service:**
1. Go to `/admin/services`
2. Click "Add New Service" button
3. Fill in the form:
   - Title: "Test Service"
   - Slug: "test-service"
   - Description: "This is a test service"
   - Price: "$500"
   - Icon: Select any icon
   - Features: Add 3 features
   - Status: Active
4. Click "Add Service"
5. ✅ Verify service appears in the list

**Test Edit Service:**
1. Click "Edit" on any service
2. Modify the title to "Updated Test Service"
3. Click "Update Service"
4. ✅ Verify changes are reflected

**Test Delete Service:**
1. Click "Delete" on any service
2. Confirm deletion
3. ✅ Verify service is removed from list

### 2. Cities Management
**Test Add City:**
1. Go to `/admin/cities`
2. Click "Add New City" button
3. Fill in the form:
   - City Name: "Test City"
   - Country: "Test Country"
   - Status: Active
4. Click "Add City"
5. ✅ Verify city appears in the list

**Test Edit City:**
1. Click "Edit" on any city
2. Modify the name to "Updated Test City"
3. Click "Update City"
4. ✅ Verify changes are reflected

**Test Delete City:**
1. Click "Delete" on any city
2. Confirm deletion
3. ✅ Verify city is removed from list

### 3. Blog Management
**Test Add Blog Post:**
1. Go to `/admin/blog`
2. Click "Write New Post" button
3. Fill in the form:
   - Title: "Test Blog Post"
   - Service: Select any service
   - City: "Test City"
   - Status: Draft
   - Excerpt: "This is a test blog post"
   - Content: "Full content here"
4. Click "Create Post"
5. ✅ Verify post appears in the list

**Test Edit Blog Post:**
1. Click "Edit" on any blog post
2. Modify the title to "Updated Test Post"
3. Click "Update Post"
4. ✅ Verify changes are reflected

**Test Delete Blog Post:**
1. Click "Delete" on any blog post
2. Confirm deletion
3. ✅ Verify post is removed from list

### 4. Leads Management
**Test Add Lead:**
1. Go to `/admin/leads`
2. Click "Add Lead" button
3. Fill in the form:
   - Name: "Test Lead"
   - Email: "test@example.com"
   - Phone: "+1234567890"
   - City: "Test City"
   - Service: Select any service
   - Message: "Test message"
   - Status: New
   - Priority: Medium
4. Click "Add Lead"
5. ✅ Verify lead appears in the list

**Test View Lead:**
1. Click "View" on any lead
2. ✅ Verify all lead details are displayed correctly
3. Click "Close" to close the modal

**Test Edit Lead:**
1. Click "Edit" on any lead
2. Modify the name to "Updated Test Lead"
3. Click "Update Lead"
4. ✅ Verify changes are reflected

**Test Status Update:**
1. Use the status dropdown in the table
2. Change status from "New" to "Contacted"
3. ✅ Verify status is updated immediately

**Test Delete Lead:**
1. Click "Delete" on any lead
2. Confirm deletion
3. ✅ Verify lead is removed from list

### 5. Projects Management
**Test Add Project:**
1. Go to `/admin/projects`
2. Click "Add New Project" button
3. Fill in the form:
   - Title: "Test Project"
   - Client: "Test Client"
   - Description: "Test project description"
   - Service: Select any service
   - Status: Planning
   - Progress: 0
   - Start Date: Today's date
   - End Date: Future date
   - Budget: "$5000"
   - Team: "John Doe, Jane Smith"
4. Click "Add Project"
5. ✅ Verify project appears in the list

**Test Edit Project:**
1. Click "Edit" on any project
2. Modify the title to "Updated Test Project"
3. Update progress to 50
4. Click "Update Project"
5. ✅ Verify changes are reflected including progress bar

**Test Delete Project:**
1. Click "Delete" on any project
2. Confirm deletion
3. ✅ Verify project is removed from list

### 6. Search and Filter Testing
**Test Search Functionality:**
1. Add multiple items to any section
2. Use the search box to filter items
3. ✅ Verify search works correctly

**Test Status Filtering:**
1. Add items with different statuses
2. Use status filter dropdown
3. ✅ Verify filtering works correctly

### 7. Settings Management
**Test Settings Update:**
1. Go to `/admin/settings`
2. Navigate through different tabs
3. Modify any setting
4. Click "Save Changes"
5. ✅ Verify success message appears

## Expected Results
- All CRUD operations should work without errors
- Data should persist during the session
- Forms should validate required fields
- Modals should open and close properly
- Search and filtering should work correctly
- Status updates should be immediate
- Delete confirmations should appear
- Success messages should show after operations

## Notes
- Data is currently stored in component state (not persistent across page refreshes)
- All operations are client-side only
- No backend API calls are made
- Data will reset when page is refreshed